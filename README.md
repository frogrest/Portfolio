# Gian Carlo Noriega — Portfolio

Single-page portfolio for **Gian Carlo Noriega**, a full-stack developer and
creative technologist based in the Philippines. The site showcases a live
point-of-sale product (FrogPOS), an Unreal Engine gameplay prototype
(Prepaview), and a state-driven restaurant chatbot.

## Stack

- **HTML5** with semantic markup, ARIA tabs, and inline SVG icons
- **Tailwind CSS** (pinned CDN build, custom theme tokens in `index.html`)
- **Custom CSS** design-token system in `Styles/styles.css`
- **Vanilla JavaScript** in `JS/script.js` — scroll reveals, tab switching,
  floating hero panels, audio toggle, contact form
- **Google Fonts** (Inter)

No build step is required — open `index.html` in a browser.

## Structure

```
.
├── index.html              # Main portfolio page
├── resume.html             # Printable résumé (use the print button → Save as PDF)
├── restaurant_chatbot.html # Standalone chatbot prototype
├── Styles/styles.css       # Design tokens + all component styles
├── JS/script.js            # Interaction logic
├── Images/                 # Hero, headshot, and project screenshots
└── Audio/BG-Music.mp3      # Optional background music (toggle in the UI)
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## To-dos before deploying

- Replace placeholder analytics token in `index.html` (Cloudflare Web
  Analytics) if you enable it.
- Adjust the journey-timeline date ranges in `index.html` to match your
  actual history.
- Verify the Prepaview feature bullets in `index.html` match the project.
- Optional: add real metrics (stores onboarded, orders processed) to the
  FrogPOS case study.
