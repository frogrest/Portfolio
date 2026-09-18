/**
 * Restaurant chatbot state machine, ported from legacy Gian's Kitchen prototype.
 * Pure data + pure deterministic functions with zero external dependencies.
 */
export const RESTAURANT_NAME = "Gian's Kitchen";

export type Category = "appetizers" | "mains" | "drinks";

export const CATEGORIES: Record<Category, { id: number; name: string; price: number }[]> = {
  appetizers: [
    { id: 1, name: "Garlic Bread", price: 5 },
    { id: 2, name: "Bruschetta", price: 7 },
    { id: 3, name: "Mozzarella Sticks", price: 8 },
  ],
  mains: [
    { id: 1, name: "Burger", price: 10 },
    { id: 2, name: "Pizza", price: 12 },
    { id: 3, name: "Pasta Alfredo", price: 13 },
  ],
  drinks: [
    { id: 1, name: "Iced Tea", price: 3 },
    { id: 2, name: "Soda", price: 4 },
    { id: 3, name: "Lemonade", price: 5 },
  ],
};

const CATEGORY_ALIASES: Record<string, Category> = {
  "1": "appetizers",
  "2": "mains",
  "3": "drinks",
  appetizer: "appetizers",
  appetizers: "appetizers",
  starter: "appetizers",
  starters: "appetizers",
  main: "mains",
  mains: "mains",
  entree: "mains",
  entrees: "mains",
  drink: "drinks",
  drinks: "drinks",
  beverage: "drinks",
};

const ITEM_INDEX = new Map<string, { name: string; price: number }>();
for (const [catKey, items] of Object.entries(CATEGORIES)) {
  for (const item of items) {
    ITEM_INDEX.set(String(item.id).toLowerCase() + "|" + catKey, item);
    ITEM_INDEX.set(item.name.toLowerCase(), item);
  }
}

export type ChatRole = "bot" | "user";
export type ChatMessage = { role: ChatRole; text: string };
export type CartItem = { name: string; price: number };

export type ChatState = {
  messages: ChatMessage[];
  cart: CartItem[];
  lastOfferedCategory: Category | null;
};

export const INITIAL_CHAT_STATE: ChatState = {
  messages: [],
  cart: [],
  lastOfferedCategory: null,
};

const greet = (): ChatMessage => ({
  role: "bot",
  text: `Welcome to ${RESTAURANT_NAME}! How can I help you today? Type 'menu' to see our categories or order directly.`,
});

/** Message shown when the chat window is first opened. */
export function greeting(): ChatMessage[] {
  return [greet()];
}

function categoriesMessage(): ChatMessage {
  return {
    role: "bot",
    text: "Here are our categories:\n1. Appetizers\n2. Mains\n3. Drinks\n\nType a category or number to see items.",
  };
}

function categoryItemsMessage(catKey: Category): ChatMessage {
  const items = CATEGORIES[catKey];
  if (!items.length) {
    return {
      role: "bot",
      text: "I don't have items for that category yet. Try typing 'menu'.",
    };
  }
  const pretty = catKey.charAt(0).toUpperCase() + catKey.slice(1);
  return {
    role: "bot",
    text: `${pretty}:\n` + items.map((i) => `• ${i.id}. ${i.name} - $${i.price}`).join("\n") + "\n\nType the item name or number to add it to your order.",
  };
}

function addedMessage(itemName: string): ChatMessage {
  return {
    role: "bot",
    text: `✓ ${itemName} added to your cart! Type 'menu' to add more items, or 'checkout' to finalize your order.`,
  };
}

function checkoutMessage(cart: CartItem[]): ChatMessage {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return {
    role: "bot",
    text: `Order Summary (${cart.length} items):\n` + cart.map((i) => `• ${i.name} — $${i.price}`).join("\n") + `\n\nTotal: $${total}\nThank you for ordering with ${RESTAURANT_NAME}! Your ticket is queued.`,
  };
}

function fallbackMessage(): ChatMessage {
  return {
    role: "bot",
    text: "I'm sorry, I didn't catch that. Type 'menu' to view categories or 'checkout' to finish.",
  };
}

function tryAddItem(
  input: string,
  lastOfferedCategory: Category | null,
): { item: CartItem } | null {
  const asNumber = /^\d+$/.test(input) ? Number(input) : null;

  if (asNumber !== null) {
    if (lastOfferedCategory && CATEGORIES[lastOfferedCategory]) {
      const match = CATEGORIES[lastOfferedCategory].find((i) => i.id === asNumber);
      if (match) return { item: { name: match.name, price: match.price } };
    }
    for (const items of Object.values(CATEGORIES)) {
      const match = items.find((i) => i.id === asNumber);
      if (match) return { item: { name: match.name, price: match.price } };
    }
  }

  const exact = ITEM_INDEX.get(input);
  if (exact) return { item: { name: exact.name, price: exact.price } };

  for (const items of Object.values(CATEGORIES)) {
    for (const item of items) {
      const n = item.name.toLowerCase();
      if (n.includes(input) || input.includes(n)) {
        return { item: { name: item.name, price: item.price } };
      }
    }
  }
  return null;
}

/** React to one user message, returning the next chat state. */
export function handleMessage(state: ChatState, raw: string): ChatState {
  const text = raw.trim().toLowerCase();
  if (!text) return state;

  const messages: ChatMessage[] = [...state.messages, { role: "user", text: raw }];
  const base = { ...state, messages };

  if (text === "menu") {
    return { ...base, lastOfferedCategory: null, messages: [...messages, categoriesMessage()] };
  }

  if (text === "checkout") {
    if (state.cart.length === 0) {
      return {
        ...base,
        messages: [
          ...messages,
          { role: "bot", text: "Your cart is currently empty! Type 'menu' to pick your items." },
        ],
      };
    }
    return {
      messages: [...messages, checkoutMessage(state.cart), greet()],
      cart: [],
      lastOfferedCategory: null,
    };
  }

  const category = CATEGORY_ALIASES[text];
  if (category) {
    return {
      ...base,
      lastOfferedCategory: category,
      messages: [...messages, categoryItemsMessage(category)],
    };
  }

  const added = tryAddItem(text, state.lastOfferedCategory);
  if (added) {
    return {
      ...base,
      cart: [...state.cart, added.item],
      messages: [...messages, addedMessage(added.item.name)],
    };
  }

  return { ...base, messages: [...messages, fallbackMessage()] };
}
