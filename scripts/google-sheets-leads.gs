function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("FreeKit Leads")
    .addItem("Connect webhook", "setupLeadWebhook")
    .addToUi();
}

function setupLeadWebhook() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error("Open this Apps Script from the Google Sheet you want to use.");
  }

  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    "Connect contact leads",
    "Paste the exact GOOGLE_SHEETS_WEBHOOK_TOKEN value from your .env file.",
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() !== ui.Button.OK) {
    return;
  }

  const token = response.getResponseText().trim();
  if (token.length < 32) {
    ui.alert("The token looks too short. Copy the full value from .env and try again.");
    return;
  }

  PropertiesService.getScriptProperties().setProperties({
    LEADS_SPREADSHEET_ID: spreadsheet.getId(),
    LEADS_WEBHOOK_TOKEN: token,
  });

  ui.alert("Connected. This sheet and webhook token are now configured.");
}

function doPost(event) {
  const properties = PropertiesService.getScriptProperties();
  const expectedToken = properties.getProperty("LEADS_WEBHOOK_TOKEN");
  const spreadsheetId = properties.getProperty("LEADS_SPREADSHEET_ID");

  if (!expectedToken || !spreadsheetId) {
    return jsonResponse({ ok: false, error: "Webhook is not configured." });
  }

  let payload;
  try {
    payload = JSON.parse(event.postData.contents);
  } catch {
    return jsonResponse({ ok: false, error: "Invalid request body." });
  }

  if (!payload || payload.token !== expectedToken) {
    return jsonResponse({ ok: false, error: "Unauthorized." });
  }

  const { name, phone, businessType, receivedAt } = payload;
  if (
    typeof name !== "string" ||
    typeof phone !== "string" ||
    typeof businessType !== "string" ||
    typeof receivedAt !== "string" ||
    !name.trim() ||
    !phone.trim() ||
    !businessType.trim()
  ) {
    return jsonResponse({ ok: false, error: "Missing lead fields." });
  }

  try {
    const lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
      const sheet = spreadsheet.getSheetByName("Leads")
        || spreadsheet.insertSheet("Leads");

      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          "Received at (UTC)",
          "Name",
          "Phone",
          "Business type",
          "Status",
          "Remark",
        ]);
        sheet.setFrozenRows(1);
      }

      sheet.appendRow([
        receivedAt,
        asPlainText(name),
        asPlainText(phone),
        asPlainText(businessType),
        "New",
        "",
      ]);
    } finally {
      lock.releaseLock();
    }

    return jsonResponse({ ok: true });
  } catch (error) {
    console.error("Could not append lead to the spreadsheet.", error);
    return jsonResponse({ ok: false, error: "Could not save the lead." });
  }
}

function asPlainText(value) {
  const text = value.trim();
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
