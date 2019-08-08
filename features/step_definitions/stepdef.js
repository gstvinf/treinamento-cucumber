const assert = require('assert');
const { Given, When, Then } = require('cucumber');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

const { Builder, By} = require('selenium-webdriver');

var driver = new Builder()
.forBrowser('chrome')
.build()

Given('que eu digito 1 + 1', async function () {
	await driver.get("http://gstvinf.github.io/calculadora/")
	var btn1 = driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/button[5]'))
	var btnSoma = driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/button[8]'))

	await btn1.click()
	await btnSoma.click()
	await btn1.click()
});


When('eu aperto =', async function () {
   var btnIgual = driver.findElement(By.xpath('//*[@id="root"]/div/div/div[2]/button[19]'))
   await btnIgual.click();
});


Then('o sistema deve exibir {int}', async function (resposta) {
    var respostaRecebida = await driver.findElement(By.xpath('//*[@id="root"]/div/div/div[1]/p')).getText()
    await assert.equal(resposta.toString(), respostaRecebida)
    await driver.close()
});