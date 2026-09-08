// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './pwtests',
  timeout: 500*1000 ,
  reporter:'html',
  projects:[
    {
      name:'chrome',
      use:   {
        browserName:'chromium',
        headless:false,
        launchOptions: {slowMo: 2000,},
        screenshot:'on',
        trace:'on',
      }
    },
    {
      name:'safari',
      use:   {
        browserName:'chromium',
        headless:false,
        launchOptions: {slowMo: 2000,},
        screenshot:'on',
        trace:'on',
      }
    },
  ]
  
});

