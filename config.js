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
global.devs = "919728893187";
global.sudo = process.env.SUDO || "919728893187,263710405675";
global.owner = process.env.OWNER_NUMBER || "919728893187,263710405675";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1GeTVXNHJZekJEamRRaXRCTUMyOXFNVUNDMDdPbko1bWY1RjZqRnVXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGpQaGdVazVUK1RPRy9PUlMrWWdKajJzbWo1RFBFdjZtMlV0OEVFNEJrST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRHkyN0dLRGRBaVErZFptcWZjM1IrVFlEcW5xcVVJZmhBRWRtRDRybGxVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcS9zVStNTUl1ZmkrcDBUSlFBcjN3RlFscGsxOUtaQ3pORmpZSFVzTWhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBLTmtjQ0ovOGtGMitIWXUvVkhDNTlEa2ZLYzcrMFhhbEJ1MDY0ZGRWMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJrb0JMbGJmWTN1clZKSk9RVFBxSlN1aTNBSjB0Z0JWMVNkL1VWU0RLSEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09sUnViU2hDd3pXOXN1bDZLR0ErMW9MaEplbjhzdU93Qnd6RHhpMXkzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME01UC9DclhiZ2JTeUtWSktIM3dZVnpNYVQxenJ4d1o4YTQrTHZwRGZTYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNVRmtMSUFkbXdOWE85WVdYcHFIYzlqRnFjanZ6TzVBMXBQSlV1N2lvTWZiQUVLYXlqODVuYXRKVXdnRXM5ajFRNkg3Yzk0SUdndHVJUkNISDVPMUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJVa1JWNWtkVlQzNmJ0VkEvckM5bCtVTU95dXEzbGlrQVdwVE9tTDAxTnFjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkxOTcyODg5MzE4N0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwODQ1RTNGQjRERjAzM0JEMjdGRTMzQTdGOEZFQ0QwNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5MDE0NDA1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MTk3Mjg4OTMxODdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNURBOTFFMzRBQkY2Qzc4QUMzQkQ1QjUxNEU0RDZBQjAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTAxNDQwOH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMDRzVktUOHhURFdSSGhzUWM4dlhKZyIsInBob25lSWQiOiJlMWFiNTMwOS1lYjQzLTRjNGUtOWExZS1hMTIwYjcwZGY4ZWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXdQamhnQlJRcStpVGNmVk1xdENSTE0yM2ZNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhjWG9MTHVEcWhiK2JrU0dSYWxMQmdXVHMzOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJaVjZKWktMTiIsIm1lIjp7ImlkIjoiOTE5NzI4ODkzMTg3OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVSBSIE1FTlRBTCBCVVQgSSBMSUtFIFUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xQWDB2Z0VFUGZVdXJnR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImdDTVlRalMzekl1ZkRXRkl1ZHllNmcxMk1LY0kxQWU1WEpMZ2ZxY1lzVXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjR6aURHbEZzVWNHWFNNSGJFZ2lySFNYRDJhbVBRMGxXVnNvQzU3VUFLUFFuSkcyeFFkNEdBRG5GazdYV0RGZ001dW9scVdXajhFeU9WOGE1SGxvWEFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLQ2VsVW9iLzFDSmJrWU9tY0xGMDZSNGFQbzBGaVJ6d2ZjWDdEbU55TFdMUitIY1FoSDNSWmYwQlFCWFhIT05Rc3ZmeGNBZmtkNFJGUVZkeUI1c2lCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkxOTcyODg5MzE4Nzo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllBakdFSTB0OHlMbncxaFNMbmNudW9OZGpDbkNOUUh1VnlTNEg2bkdMRkwifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkwMTQ0MDMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmlnIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
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
