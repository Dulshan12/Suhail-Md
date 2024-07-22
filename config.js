const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_39_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDksXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzMixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA5OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExLFxuICAgICAgICAyMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDY1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDY3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDczLFxuICAgICAgICA1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDksXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDMzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTksXG4gICAgICAgIDczLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIis3ZG9ZUHczaFM4aEExa0Ruc1VNaWVVVGozWDNhQ3R3cWMzSXZiYjRiQ3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NDEzODg1NDJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkEwNEE2NjE1REM5RDI1RjczQTc4ODgzMDYwRjRFOTI2XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTY1NTU4OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzQxMzg4NTQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJERkU3QjhGQjk3RTI3M0MwNzc1NjI3OTBBRkUyMkQ1RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE2NTU1ODlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiODJhMXFnZ0xUOHFsSXZqZTVsVU9NUVwiLFxuICBcInBob25lSWRcIjogXCI4MjIyMWY4ZS05ZmNkLTRiM2QtOWYxNC03ZWQ5ZjVhNmFlOThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjYsXG4gICAgICAxMjksXG4gICAgICAxMDQsXG4gICAgICA4NyxcbiAgICAgIDE3MyxcbiAgICAgIDE0NyxcbiAgICAgIDE1NSxcbiAgICAgIDE4NixcbiAgICAgIDE0OCxcbiAgICAgIDE0NCxcbiAgICAgIDEwLFxuICAgICAgMTM4LFxuICAgICAgNDcsXG4gICAgICAxNDEsXG4gICAgICAxMTAsXG4gICAgICAxMjIsXG4gICAgICAxMTEsXG4gICAgICA3NSxcbiAgICAgIDI1NSxcbiAgICAgIDIyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAxODgsXG4gICAgICA3LFxuICAgICAgMTk1LFxuICAgICAgMTk3LFxuICAgICAgNDQsXG4gICAgICAxODcsXG4gICAgICA0NCxcbiAgICAgIDE1NCxcbiAgICAgIDIzMixcbiAgICAgIDE0NixcbiAgICAgIDU5LFxuICAgICAgMjUzLFxuICAgICAgMTg5LFxuICAgICAgMTM4LFxuICAgICAgMTg2LFxuICAgICAgMTEwLFxuICAgICAgMjE0LFxuICAgICAgMTE0LFxuICAgICAgNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjVWV1lBUDJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzQxMzg4NTQyOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLvvLfhtIDhtJvit67qnLHit6nhtIDit7fhtJjhtJggIOqcsc2u4bSbzaXhtIDht5jhtJvit7fhtJzit6rqnLHht6Qg8J2YlvCdmLjwnZiv8J2YpvCdmLNcIixcbiAgICBcImxpZFwiOiBcIjI1MzQ1OTQ0MTkzMDM4ODoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ003Wm05WUVFSnpDK2JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic1Nma3FDb2JqOFBmNFZ2RDh6Vnp3MnJKT0tDdW8wcjN6TGhpdVFrdFJsST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlRHMzRzdLMmRuQlhQRHNtMW1qcERjME92MnIySmR5Rkk5REdoeWFPQXZKQUVrR0JQOHZUVXFXRlM2aDV5eE53VUNTNGtqa01qRFpNRGNXSDZGSEhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJxVitwMlMvVnRJTDdSYlAvckxrK0V1TXY0SXFSQnBnd1pEOWRzWk56eVdYay9zNjdPT0VMMC9WL3VoKzB5WEp2MHlZaE1TUGNLR2cyR2Y4cGEvRDhpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc0MTM4ODU0MjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NTU1ODYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIODdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg4Ny5qc29uIjogIntcImtleURhdGFcIjpcIjQ5VXFhVk9lTnNHSHhGRVQ0djJyY2VQSndoMTdtdHR6azUvRU80cDVNYVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI1NDU1MDczNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxNjU1NTg2NzgwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
