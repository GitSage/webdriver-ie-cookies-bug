const {Builder, By} = require('selenium-webdriver');

(async function example() {
	let browser = await new Builder()
		.usingServer('http://localhost:5555')
		.forBrowser('internet explorer')
		.build();
	try {
		await browser.get('http://127.0.0.1:8080/site.html');
		await browser.findElement(By.id('openPopup')).click();

		let handles = await browser.getAllWindowHandles();
		await browser.switchTo().window(handles[handles.length - 1]);

		await browser.manage().deleteAllCookies();

	} finally {
		await browser.quit();
	}
})();