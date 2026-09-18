import { test, expect } from '@playwright/test';

test.describe('Gian Carlo Noriega Portfolio Verification', () => {
  test('should load page with correct title and metadata', async ({ page }) => {
    await page.goto('/');

    // Check title
    await expect(page).toHaveTitle(/Gian Carlo Noriega/);

    // Verify root is mounted
    const root = page.locator('#root');
    await expect(root).toBeVisible();
  });

  test('should render all portfolio sections and resume details correctly', async ({ page }) => {
    await page.goto('/');

    // Verify Hero section and SplitText heading
    const heroSection = page.locator('#hero');
    await expect(heroSection).toBeVisible();
    await expect(heroSection.locator('h1').first()).toBeVisible();

    // Scroll to reveal Stage 2 roles and bio
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(400);
    await expect(heroSection.getByText(/Full-Stack Developer/)).toBeVisible();

    // Verify About section
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection.getByText('About Me')).toBeVisible();
    await expect(aboutSection.getByText('BS Computer Science')).toBeVisible();

    // Verify Skills section
    const skillsSection = page.locator('#skills');
    await expect(skillsSection).toBeVisible();
    await expect(skillsSection.getByText('Skills & Technologies')).toBeVisible();
    await expect(skillsSection.getByText('Unreal Engine')).toBeVisible();
    await expect(skillsSection.getByText('TypeScript')).toBeVisible();

    // Verify Projects section with resume projects
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
    await expect(projectsSection.getByText('FrogPOS').first()).toBeVisible();
    await expect(projectsSection.getByText('Prepaview').first()).toBeVisible();
    await expect(projectsSection.getByText('Restaurant Bot').first()).toBeVisible();

    // Verify Experience section
    const experienceSection = page.locator('#experience');
    await expect(experienceSection).toBeVisible();
    await expect(experienceSection.getByText('Video Editing & VFX Creator')).toBeVisible();
    await expect(experienceSection.getByText('DevCon Philippines')).toBeVisible();

    // Verify Education section
    const educationSection = page.locator('#education');
    await expect(educationSection).toBeVisible();
    await expect(educationSection.getByText('Bachelor of Science in Computer Science')).toBeVisible();

    // Verify Contact section
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();
    await expect(contactSection.getByText('giannoriega4everything@gmail.com')).toBeVisible();
    await expect(contactSection.getByText('09937893097')).toBeVisible();

    // Verify Footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should allow navigation through navbar links', async ({ page }) => {
    await page.goto('/');

    // Click "Projects" nav link
    const projectsLink = page.locator('header nav a[href="#projects"]');
    await expect(projectsLink).toBeVisible();
    await projectsLink.click();

    // Verify projects section is in view
    await expect(page.locator('#projects')).toBeVisible();
  });

  test('should handle contact form submission cleanly', async ({ page }) => {
    await page.goto('/');

    // Fill contact form
    await page.fill('#contact-name', 'Partner / Recruiter');
    await page.fill('#contact-email', 'recruiter@example.com');
    await page.fill('#contact-message', 'Interested in discussing development opportunities!');

    // Submit
    await page.click('button[type="submit"]');

    // Confirm success message
    await expect(page.getByText('Message Received!')).toBeVisible();
  });

  test('should verify Resume button in About section', async ({ page }) => {
    await page.goto('/');

    const resumeBtn = page.locator('#resume-button');
    await expect(resumeBtn).toBeVisible();
    await expect(resumeBtn).toHaveAttribute('href', /ResumeLatest\.pdf/);
    await expect(resumeBtn).toHaveAttribute('download', /Gian_Carlo_Noriega_Resume\.pdf/);
  });

  test('should interact with Portfolio Assistant chatbot', async ({ page }) => {
    await page.goto('/');

    // Chatbot trigger button is visible
    const trigger = page.locator('button[aria-label="Open Portfolio Assistant"]');
    await expect(trigger).toBeVisible();

    // Click trigger to open assistant
    await trigger.click();

    // Assistant modal appears
    await expect(page.getByText("Gian's Assistant")).toBeVisible();
    await expect(page.getByText("Ask anything about my work & stack")).toBeVisible();

    // Click quick chip "Tell me about FrogPOS"
    const frogChip = page.locator('button', { hasText: 'Tell me about FrogPOS' });
    await expect(frogChip).toBeVisible();
    await frogChip.click();

    // Verify response appears
    await expect(page.getByText(/FrogPOS is Gian's flagship production platform/)).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('Open Live FrogPOS')).toBeVisible();

    // Ask about resume
    const input = page.locator('input[placeholder="Ask about projects, stack, resume..."]');
    await input.fill('can i get your resume');
    await page.locator('button[aria-label="Send message"]').click();

    // Verify resume response with download button
    await expect(page.getByText('Download ResumeLatest.pdf')).toBeVisible({ timeout: 5000 });
  });

  test('capture visual screenshot of the portfolio', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);

    // Save full page screenshot
    await page.screenshot({ path: 'portfolio-preview.png', fullPage: true });
  });
});
