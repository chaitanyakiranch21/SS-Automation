const Excel = require('exceljs')
const { test, expect } = require('@playwright/test');

async function ExcelTest(searchText, replaceText, change, filePath) 
{
    const workBook = new Excel.Workbook();
    await workBook.xlsx.readFile(filePath);
    const workSheet = workBook.getWorksheet("Sheet1");

    const output = await ReadExcel(workSheet, searchText);
    const cell = workSheet.getCell(output.row, output.column+change.colChange);
    cell.value = replaceText;
    await workBook.xlsx.writeFile(filePath);
}

async function ReadExcel(workSheet, searchText)
{
    let output = {row:-1,column:-1};
    workSheet.eachRow((row, rowNumber) => 
        {
            row.eachCell((cell, colNumber) => 
                {
                    if(cell.value === searchText)
                        {
                            output.row = rowNumber;
                            output.column = colNumber;
                        }
                    })
                })
                
                return output; 
            }


test('Upload download excel validation', async ({ page }) => {
  const textSearch = 'Kivi';
  const updateValue = '500';
  const filePath = "C:/Users/cchintalapudi/Downloads/download.xlsx";
 
  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download' }).click();
  await download;
  ExcelTest(textSearch, updateValue, { rowChange: 0, colChange: 2 }, filePath);
  await page.locator('#fileinput').setInputFiles(filePath);

  const textSearchLocator = await page.getByText(textSearch)
  const outputrow = await page.getByRole('row').filter({has : textSearchLocator})
  await expect(outputrow.locator("#cell-4-undefined")).toContainText(updateValue);
});