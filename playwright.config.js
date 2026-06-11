import { defineConfig, devices } from '@playwright/test'

const URL = 'http://localhost:5173'

export default defineConfig({
  testDir: 'tests/cases',
  fullyParallel: true,
  reporter: [
    ['list', { printSteps: true }]
  ],
  workers: 1,
  timeout: 20_000,
  use: { baseURL: URL },
  projects: [{
    name: 'main',
    use: {
      ...devices['Desktop Chrome'],
      headless: true,
      viewport: { width: 1600, height: 900 },
    }
  }],
  webServer: {
    command: 'npm start',
    url: URL,
    reuseExistingServer: true
  }
})
