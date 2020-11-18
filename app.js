const puppeteer = require("puppeteer");
const main = require("./index");

//console.log(main)

async function inputLoginInfo(page) {
  const loginName = await page.$("#loginName");
  const password = await page.$("#password");

  //console.log(loginName, password)
  //const loginBtn = page.$('button');
  await loginName.type("00621414");
  await password.type("Haier2020*");
  await page.click("button");
  await page.waitForResponse("http://hcc.haier.net/slg/user/login");
  const closeIcon = await page.waitForSelector(".ant-modal-close-x");
  await closeIcon.click();
}

async function gotoOridinaryJobe(page) {
  await page.goto("http://hcc.haier.net/dashboard");
  //const link = await page.$('a[href="/ordinaryJob"]')
  //await link.click()
}

async function downloadExcel(urls, page, browser) {
  /*
  const promiseArr = []
  urls.forEach((url) => {
    console.log('>>>>',url)
    promiseArr.push(page.goto(url))
  })
  return Promise.all(promiseArr)
  */
  /*
  urls.forEach(async url => {
    try {
      await page.goto(url)
    }catch(e){}
  })*/

  for (let i = 0; i < urls.length; i++) {
    //console.log(i)
    const page = await browser.newPage();
    page.goto(urls[i]).catch(() => {});
  }
}

(async () => {
  const browser = await puppeteer.launch({
    //headless: false
    //executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const urls = await main();
  const page = await browser.newPage();

  //console.log(urls)
  //console.log(page);
  await page.goto("http://hcc.haier.net/ordinaryJob");
  await inputLoginInfo(page);
  await gotoOridinaryJobe(page);
  await downloadExcel(urls, page, browser);

  //const cookies1 = await page.cookies('hcc.haier.net/')
  //const cookies2 = await page.cookies('.haier.net/')
  //console.log(cookies1,cookies2)

  //await page.screenshot({path: 'baidu.png'})
})();
