import puppeteer from "puppeteer"

const initiate = async () => {
    const browser = await puppeteer.launch({headless: false, slowMo: 250, devtools: false});
    const page = await browser.newPage();
    return {browser, page} 
}

const main = async (browser, page) => {
    while( 1 < 10) {
        // home or backward link
        await page.goto("https://touhidulshawan.vercel.app/");
        await page.waitForSelector('h1')
        // forward link
        await page.goto("https://touhidulshawan.vercel.app/projects")
        await page.waitForSelector('body')
        await page.goBack()
        await page.waitForSelector('h1')
        await page.goForward()
        await page.waitForSelector('body')

        // await browser.waitForTarget(()=> false);
    // close the browser
    // await browser.close();
    }
}

const {browser, page} =  await initiate();

main(browser, page)
