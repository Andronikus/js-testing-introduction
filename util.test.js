const { generateText, validateAndGenerateText } = require('./util');
const puppeteer = require('puppeteer');

const VALID_GENERATED_TEXT = 'Andronikus (34 years old)';

// test unity 
test('should output name and age', () => {
    const text = generateText('Andronikus', 34);
    expect(text).toBe(VALID_GENERATED_TEXT);
    const anotherText = generateText('Laura', 35);
    expect(anotherText).toBe('Laura (35 years old)')
});

// test false positive
test('should output data - less text', () => {
    const text = generateText('',null);
    expect(text).toBe(' (null years old)');
});

// integration tests
test('should output valid name and age', () => {
    const text = validateAndGenerateText('Andronikus', 34);
    expect(text).toBe(VALID_GENERATED_TEXT);
});

// e2e test
test('should an item be inserted with name and age', async () => {
    const browser = await puppeteer.launch({
        headless: true,
        // slowMo: 80,
        args: ['--window-size=1920,1080']
    });

    const page = await browser.newPage();
    await page.goto('file:///D:/SoftwareWarehouse/js-testing-introduction/index.html');

    await page.click('input#name');
    await page.type('input#name', 'Andronikus');
    await page.click('input#age');
    await page.type('input#age', '34');
    await page.click('#btnAddUser');

    const finalTextAdded = await page.$eval('.user-item', el => el.textContent);
    expect(finalTextAdded).toBe(VALID_GENERATED_TEXT);
}, 6000)
