// ============================================
// 駐點人員回報系統 - 每週自動上傳版
// ============================================

const SHEET_ID = '1vHtsnEVw-Ji2xkZQpAE8dnMQCmsO5oh6c6QC-HTDSHY';
const STORES_SHEET_ID = '1192022087'; // 門市清單工作表gid
const DRIVE_FOLDER_NAME = '駐點人員專案系統';

function doGet(e) {
  var p = (e && e.parameter) || {};
  var action = p.action || '';
  
  try {
    // 讀取門市清單
    if (action === 'getStores') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      // 使用 gid=1192022087 的工作表 (T2門市清單)
      var storeSheet = ss.getSheetById(1192022087);
      var result = [];
      if (storeSheet) {
        var data = storeSheet.getRange(2, 3, storeSheet.getLastRow() - 1, 1).getValues();
        for (var i = 0; i < data.length; i++) {
          if (data[i][0]) {
            result.push(String(data[i][0]).trim());
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 讀取產品列表
    if (action === 'getProducts') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName('Price');
      var result = [];
      if (sheet) {
        var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 5).getValues();
        for (var i = 0; i < data.length; i++) {
          if (data[i][0]) {
            result.push({pn: String(data[i][0]).trim(), name: String(data[i][1] || '').trim(), price: String(data[i][4] || '').trim()});
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 新增回報
    if (action === 'addReport') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName('回報') || ss.insertSheet('回報');
      var uniqueId = new Date().getTime() + '-' + Math.random().toString(36).substr(2, 9);
      var taiwanTime = new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toISOString();
      sheet.appendRow([uniqueId, taiwanTime, p.name || '', p.store || '', p.pn || '', p.productName || '', p.price || '', p.note || '-']);
      return ContentService.createTextOutput(JSON.stringify({status: 'success', id: uniqueId})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 一般用戶: 獲取自己的報告
    if (action === 'getUserReports') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName('回報');
      var now = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
      var todayStr = now.toISOString().split('T')[0];
      var userName = p.name || '', userStore = p.store || '';
      var total = 0, count = 0, list = [];
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          var time = String(data[i][1] || '');
          var name = String(data[i][2] || '');
          var store = String(data[i][3] || '');
          if (time.substring(0, 10) === todayStr && name === userName && store === userStore) {
            var price = String(data[i][6] || '0').replace(/[^0-9.]/g, '');
            if (price) { total += parseFloat(price) || 0; count++; }
            var timeObj = new Date(time);
            var timeStr = (timeObj.getMonth() + 1) + '/' + timeObj.getDate() + ' ' + timeObj.getHours().toString().padStart(2,'0') + ':' + timeObj.getMinutes().toString().padStart(2,'0');
            list.push({id: String(data[i][0]), time: timeStr, pn: String(data[i][4]), productName: String(data[i][5]), price: String(data[i][6]), note: String(data[i][7] || '')});
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({total: total, count: count, reports: list})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Admin: 獲取所有報告
    if (action === 'getAllReports') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName('回報');
      var now = new Date(new Date().getTime() + 8 * 60 * 60 * 1000);
      var todayStr = now.toISOString().split('T')[0];
      var total = 0, count = 0, list = [];
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          var time = String(data[i][1] || '');
          if (time.substring(0, 10) === todayStr) {
            var price = String(data[i][6] || '0').replace(/[^0-9.]/g, '');
            if (price) { total += parseFloat(price) || 0; count++; }
            var timeObj = new Date(time);
            var timeStr = (timeObj.getMonth() + 1) + '/' + timeObj.getDate() + ' ' + timeObj.getHours().toString().padStart(2,'0') + ':' + timeObj.getMinutes().toString().padStart(2,'0');
            list.push({id: String(data[i][0]), time: timeStr, name: String(data[i][2]), store: String(data[i][3]), pn: String(data[i][4]), productName: String(data[i][5]), price: String(data[i][6]), note: String(data[i][7] || '')});
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({total: total, count: count, reports: list})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 刪除報告
    if (action === 'deleteReport') {
      var ss = SpreadsheetApp.openById(SHEET_ID);
      var sheet = ss.getSheetByName('回報');
      var uniqueId = p.id || '', userName = p.name || '', userStore = p.store || '';
      if (sheet && uniqueId) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          if (String(data[i][0]) === uniqueId && String(data[i][2]) === userName && String(data[i][3]) === userStore) {
            sheet.deleteRow(i + 1);
            return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
          }
        }
      }
      return ContentService.createTextOutput(JSON.stringify({error: '權限不足'})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // 手動觸發每週上傳
    if (action === 'weeklyUpload') {
      return ContentService.createTextOutput(JSON.stringify(weeklyUpload())).setMimeType(ContentService.MimeType.JSON);
    }
    
    return ContentService.createTextOutput(JSON.stringify({status: 'ok'})).setMimeType(ContentService.MimeType.JSON);
  } catch(e) {
    return ContentService.createTextOutput(JSON.stringify({error: e.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================
// 每週自動上傳函數 (每週四晚上6點)
// ============================================
function weeklyUpload() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName('回報');
  var result = {uploaded: 0, deleted: 0, error: null};
  
  try {
    // 取得所有資料
    if (!sheet) {
      result.error = '沒有回報工作表';
      return result;
    }
    
    var data = sheet.getDataRange().getValues();
    if (data.length <= 1) {
      result.error = '沒有資料';
      return result;
    }
    
    // 建立 CSV 內容
    var csv = 'ID,時間,姓名,店名,PN,品名,價格,備註\n';
    for (var i = 1; i < data.length; i++) {
      csv += String(data[i][0] || '') + ',';
      csv += String(data[i][1] || '') + ',';
      csv += String(data[i][2] || '') + ',';
      csv += String(data[i][3] || '') + ',';
      csv += String(data[i][4] || '') + ',';
      csv += String(data[i][5] || '') + ',';
      csv += String(data[i][6] || '') + ',';
      csv += String(data[i][7] || '') + '\n';
      result.uploaded++;
    }
    
    // 建立或取得資料夾
    var folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(DRIVE_FOLDER_NAME);
    }
    
    // 生成檔案名稱
    var now = new Date();
    var fileName = '銷售報表_' + now.getFullYear() + '_' + (now.getMonth() + 1) + '_' + now.getDate() + '.csv';
    
    // 上傳檔案
    folder.createFile(fileName, csv, MimeType.CSV);
    
    // 清除資料（保留標題列）
    if (data.length > 1) {
      sheet.deleteRows(2, data.length - 1);
      result.deleted = data.length - 1;
    }
    
    return result;
  } catch(e) {
    result.error = e.toString();
    return result;
  }
}

// ============================================
// 設定每週定時觸發器 (手動執行一次即可)
// ============================================
function setupWeeklyTrigger() {
  // 刪除舊觸發器
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'weeklyUpload') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }
  
  // 設定每週四晚上6點
  // dayOfWeek: 5 = Thursday
  // hour: 18 = 6 PM (台灣時間)
  ScriptApp.newTrigger('weeklyUpload')
    .timeBased()
    .onWeekDay(ScriptApp.WeekDay.THURSDAY)
    .atHour(10) // UTC 10 = 台灣時間 18點
    .create();
  
  return '已設定每週四晚上6點自動上傳！';
}
