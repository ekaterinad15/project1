async function baseTextInputTest(page, text) {
    await page.goto('http://uitestingplayground.com/textinput');
    await page.locator('.form-control').fill(text);
    await page.locator('.btn.btn-primary').click();
   // await expect(page.locator('.btn.btn-primary')).toContainText(text);
}

module.exports = { baseTextInputTest };