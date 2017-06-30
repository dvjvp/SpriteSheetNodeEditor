function onOpen() {
  SpreadsheetApp.getUi().createMenu('Dialogue Editor')
  .addItem("Open node editor", "mainfun")
  .addToUi();
}

function mainfun()
{  
  var html = HtmlService.createHtmlOutputFromFile('NodeEditor')
  .setWidth(800).setHeight(600);
  
  SpreadsheetApp.getUi().showModalDialog(html, 'Node editor');
}
