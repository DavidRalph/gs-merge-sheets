function mergeSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var merged = ss.getActiveSheet();
  merged.clear();
  merged.appendRow(['sheet','value']);
  
  var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
  for (var i = 0; i < sheets.length ; i++ ) {
    var sheet = sheets[i];
    var sheetName = sheet.getName();
    
    if(sheet.getName() === merged.getName()) continue;
    
    // This represents ALL the data in the sheet
    var range = sheet.getDataRange();
    var values = range.getValues();
    
    // Prefix each row with the origin sheet name and append to merged sheet
    for (var j = 0; j < values.length; j++) {
      var row = values[j];
      row.unshift(sheetName);
      merged.appendRow(row);
    }
  }
}
