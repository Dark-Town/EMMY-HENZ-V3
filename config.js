//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://thelastcroneb:Tcroneb/2025@jinwoo.zvygv0t.mongodb.net/?retryWrites=true&w=majority&appName=jinwoo";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JBVHF1SDVlbWx1T3hxMHVUMWpDOWc3dUFhTzAvTHNucFhMclRLSWxYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQWhzeWJkRk9pQmE1a1RFTmVYUjhZU1JQMENLNUU5TjZSU2Y5WXBEYVhGUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQ1RENEdkaXd2R2I0eE1UdUFLTU0wYVF0T3Qrd0FUMGFDdUdrcjh3MFhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSdVpwWTlybkJUYXBJT1U2VHlCRFEvWVFFdHEvbzBRaWNzQzczckk0TFFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllKb2VXOFY4RE1Zc0NWazlyTzFEYXplR2VQRUVpQWFpbVMwSXJLUDUzbG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdFalZUMGZCUElDajJFelU2bEc2SjhFeE8wK0t5MlV3RGVESnFvdkVDeXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEd1RlZpUWlZcjdleXJ1dzA2ZHh0QnBSTE03aVdRRXZGZW9LcFpTUUQzST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmpMNjZZK3hUMnZQZEx3ZTd5SmlLY1hxTzZVZEV6VkF5RUZsOWFxdFBrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxXR1MvY2NhM0NmT0dnWlpWV29SQlJqUFIxU1cxYWx2VG00OFdIUEZrVUwrM2dtZ1h4NG1sUXJiaXZnYWNubDlESlBMZDZWTDlsU1N6YjRQb0VKQ2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiJPQU8wQlFwbkZVbnBUMXJIVlBkeFpHVERxTUoveWllSWp1OEwvYWxRR3BJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdXFBaU9tV1NnR2M3ZlI1Vko1cmtRIiwicGhvbmVJZCI6IjA5Y2RkYjYwLWY0N2ItNGZiMy04ODU1LWM4ZWY2MmZlZTkwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsQ0lGVlptOEM0cjR0aStVMzBwWmoxa0huN1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK3hwR0lnOXBlNDBaQWpleVpXMnd3eEswZHVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdHQzNYMTM3IiwibWUiOnsiaWQiOiIyNjM3ODg1MzMxODE6MzhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Qk/CdkILwnZCR8J2QjvCdkI3wnZCE8J2QgSDwnZeb8J2XlPCdl5bwnZee8J2XqyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTi9UbHVnRkVKV0VscjhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTTBhNkVOaXAvdTNEQWlPZURxUDVFclgxRTV4YmtVemg3bVNDRXllK3lpQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidkFnMmNJTXlYRVJhNUFoTkI5byswSGJIK1JGM21vVzZOZkZUNkl0SHcra1Y1TkZGSmUxWHZlWTlUU2MzNlFoRWZVdmNtRnRIQnRQVVBYaEt4NFg3REE9PSIsImRldmljZVNpZ25hdHVyZSI6IkdRcGpaSFVJUHlCL2dKVThCRzJ3TlZZYThsWjA1YVFoYUZPbjB4dGFKUE5KNEUvN1IwUmVERmQrUnYwVjk4RlhLdmZuWDFpMFl4QnlPS2UrZUZxOGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg4NTMzMTgxOjM4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlROR3VoRFlxZjd0d3dJam5nNmorUksxOVJPY1c1Rk00ZTVrZ2hNbnZzb2cifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDMwOTQzMDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTEtOIn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
