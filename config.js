//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "fareedjimoh06@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/abbybots141/Queen_Maria";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VahOucpCcW4s1Zk3O61A";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VahOucpCcW4s1Zk3O61A";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/zdD9xsf.mp4";
global.devs = "2347032411938";
global.sudo = process.env.SUDO || "2347032411938,263710405675";
global.owner = process.env.OWNER_NUMBER || "2347032411938,263710405675";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://imgur.com/a/s2QSXcX";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEozdkJGR1BmM2pPbmNPcXErcFlsSERSbng0dnk5V0FKVk92VFZ1V2FsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVhYTzZ1bHVKQzJlbGloa0xNUVFiYjFMZmYvTlJ6RmlVVkV1dVM0UTRYQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QmxWQUFFNTBScWZ4akdqdURia0tERWo5MFBMekxka1hKMWV6TktXa1dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5Wk1qOWoyaXZsUkUxK0pZUHFJN1RQY2RCZ1ptYTRpa0dTMGF2dU5IZzJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BU2NYU0ZKRWM4aWVqN09heE1YVU1vV0xtSHdSZ2tNS1lXQnJwK2Nvbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFRUUxMZndHSGd1MDh0Mm5GbUIySU45M0drZGJPVXVkZTgyZ3FkZWZGMkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUVESVVmWHJhOVEzbXgrSHR0a1FZQjB5aHNEYU1CNTd0ZTQrTzhGT2lWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNENldFBxQnVKa05qeVNZLzZYQmtmaWRWam1vZUNoUEpmVFBFaWdDQmxocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV2N1ppMGZpd2Y0MnMzM1Q4U04zM0RTblBWWWc3U1hwUFJ4b1BKbTd0a0lsN1g3eXk2Q1U5YTFocytSYzVWK1ZJMHZZSXhMSVU3SDdNR1ZiQXVNT0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6IkJtbnpHWlltd1dVczBHTnJUL0VhcXE5M1FQbk5iNzJGSWM5NjJTTVZjMWs9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Im5KbTlkNWQxVDU2RmtVTXJwOGdBOWciLCJwaG9uZUlkIjoiYmU3YzZiMzMtNzIyNi00NjllLTllMGYtNzMyZTQ0Mzk3ZDQ5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndBMmJtNnRGV1RhZkNLR3lWUmJML3pRcmhJbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2cC9iZi9NeVdmYnZpNm0zQUNKRWZtSVU2Um89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFRETU5MNUUiLCJtZSI6eyJpZCI6IjIzNDcwMzI0MTE5Mzg6MzFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2YzU4WUhFTWZCb2JnR0dBNGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhHVUJRWGpnOXVvRThLaC9jTmhkMzlqSC9VMlo1a0Z2bWFmbTRuUzJWWGM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilk0Rkt6VFlxR2djbDlXNWREZFpHaHBOcFZZbzBLQ3NVc3lranJ0WklzN1MwZWRDWjZIYUViTnM2NlBIR1pIRUFzOUEyVVkvWFBFYkUzak4ySVNZTkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIrZlJFWk1PVHAvMWczUXNGWGdaMjRFVlQzRXl6N2E3dmtIOW0xZnhmbThxME02a0hmU1dSdFk1WExJU0ZGenJqK2FtOXVXVDJ6UEYwelFLYnJ1SGdCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMzI0MTE5Mzg6MzFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkJsQVVGNDRQYnFCUENvZjNEWVhkL1l4LzFObWVaQmI1bW41dUowdGxWMyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODYwMjMyNH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_MARIA™`",
  author: process.env.PACK_AUTHER || "QUEEN_MARIA",
  packname: process.env.PACK_NAME || "M A R I A",
  botname: process.env.BOT_NAME || "QUEEN_MARIA",
  ownername: process.env.OWNER_NAME || "ABBY",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "M A R I A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
