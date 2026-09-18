import { test, expect } from '@playwright/test';

test.describe('Impeccable Audit Checks', () => {
  test('audit desktop viewport (1280x800) and mobile viewport (375x812)', async ({ page }) => {
    const consoleLogs: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error' || msg.type() === 'warning') {
        consoleLogs.push(`[${msg.type()}] ${msg.text()}`);
      }
    });

    // 1. Desktop Check
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(1000);

    // Desktop screenshot
    await page.screenshot({ path: 'audit-desktop.png', fullPage: true });

    // Check desktop overflow
    const desktopOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // 2. Mobile Check
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(1000);

    // Mobile screenshot
    await page.screenshot({ path: 'audit-mobile.png', fullPage: true });

    // Check mobile overflow
    const mobileOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > window.innerWidth;
    });

    // 3. Touch target sizes on mobile
    const smallTouchTargets = await page.evaluate(() => {
      const interactives = Array.from(document.querySelectorAll('a, button, input, select, textarea'));
      const small: Array<{ tag: string; text: string; width: number; height: number; id: string }> = [];
      for (const el of interactives) {
        const rect = el.getBoundingClientRect();
        // Ignore hidden elements
        if (rect.width === 0 || rect.height === 0 || window.getComputedStyle(el).display === 'none') continue;
        if (rect.width < 44 || rect.height < 44) {
          small.push({
            tag: el.tagName.toLowerCase(),
            text: (el.textContent || '').trim().slice(0, 30),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            id: el.id || el.getAttribute('name') || el.className.slice(0, 20),
          });
        }
      }
      return small;
    });

    // 4. Accessible names / labels
    const missingLabels = await page.evaluate(() => {
      const issues: string[] = [];
      const buttons = Array.from(document.querySelectorAll('button'));
      for (const b of buttons) {
        const name = b.getAttribute('aria-label') || b.innerText.trim();
        if (!name) issues.push(`Button with classes "${b.className}" has no accessible name`);
      }
      const links = Array.from(document.querySelectorAll('a'));
      for (const a of links) {
        const name = a.getAttribute('aria-label') || a.innerText.trim();
        if (!name) issues.push(`Link to "${a.getAttribute('href')}" has no accessible name`);
      }
      const inputs = Array.from(document.querySelectorAll('input, textarea'));
      for (const i of inputs) {
        const id = i.getAttribute('id');
        const hasLabel = id ? !!document.querySelector(`label[for="${id}"]`) : false;
        const ariaLabel = i.getAttribute('aria-label') || i.getAttribute('aria-labelledby');
        if (!hasLabel && !ariaLabel) {
          issues.push(`Input "${i.getAttribute('name') || i.getAttribute('type')}" lacks associated label`);
        }
      }
      return issues;
    });

    // 5. Heading hierarchy
    const headings = await page.evaluate(() => {
      const hs = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      return hs.map(h => ({ level: h.tagName, text: h.textContent?.trim().slice(0, 40) }));
    });

    console.log('AUDIT_METRICS_START');
    console.log(JSON.stringify({
      desktopOverflow,
      mobileOverflow,
      smallTouchTargetsCount: smallTouchTargets.length,
      smallTouchTargets: smallTouchTargets.slice(0, 10),
      missingLabels,
      headings,
      consoleLogs,
    }, null, 2));
    console.log('AUDIT_METRICS_END');
  });
});
