import { test, expect } from '@playwright/test'
import logger from '../utils/logger.spec'

for (let i=0; i <=20 ; i++) {

    test(`practise shards ${i}`, async({page}) => {
        logger.info('Navigate to homepage')
        await page.goto('https://playwright.dev/')
        logger.info('Validate Title')
        await expect(page).toHaveTitle(/Playwright/)
    })
}