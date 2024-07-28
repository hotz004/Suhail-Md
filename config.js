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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348082441935";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_53_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDYzLFxuICAgICAgICA3NCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICA5MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpMVVJ3TzMvcU9TdCtjS3hmL1RhQ3lheE03Y3g3bTc3UDg4QjJsbkJQZzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjRaX1YzOThJVFVDbUpPd2dQSkRkVHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTc4ZDdhODgtZTU2Mi00ZDk2LWE2N2QtMjYxM2IzMjg0MjAyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MCxcbiAgICAgIDI5LFxuICAgICAgMTcxLFxuICAgICAgNDIsXG4gICAgICAxMzYsXG4gICAgICAxNTgsXG4gICAgICAxNzksXG4gICAgICAxNzEsXG4gICAgICA4LFxuICAgICAgMTQxLFxuICAgICAgNDgsXG4gICAgICAxMjEsXG4gICAgICA3MixcbiAgICAgIDEwMCxcbiAgICAgIDE5LFxuICAgICAgMjI0LFxuICAgICAgNjcsXG4gICAgICA2MixcbiAgICAgIDEyOSxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0MixcbiAgICAgIDY2LFxuICAgICAgMTQsXG4gICAgICAyMSxcbiAgICAgIDUwLFxuICAgICAgMTE2LFxuICAgICAgMjA5LFxuICAgICAgMzcsXG4gICAgICAxMzIsXG4gICAgICA0NSxcbiAgICAgIDE0MSxcbiAgICAgIDQ0LFxuICAgICAgMTUwLFxuICAgICAgMjIyLFxuICAgICAgMTAsXG4gICAgICAxOTMsXG4gICAgICAxNjksXG4gICAgICAxNTAsXG4gICAgICA0MixcbiAgICAgIDI0NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pUNDg3MEZFTWZmbXJVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNDBjamRZdmtlbTdIV3NETk4weE1GeWd5T3FReENzQUh2bytpV04wbmRUWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsUGJFcVhXTTNTekpQNHhVVUlqTWlKYTA1amVnSnk1U3d4cnRxMTlQRGgzYkcxUkZaZzJRRGdoa2ZnQ3o3QjBRbnVxQkM0SXUvbWZkM043ZjRLQzdDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjMGZtd2lHeTBnVnUweVZRQU9UZ1dPR0FBYlVMRHp1S3JPd2h6MEdOK2ZOSWYra2FNTGY5Y0lmN3ZwbmZRbGlBTmt5RTJBdFV0d2V5Q1RxVTY3clVoQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwODI0NDE5MzU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEwMzM4MDQ1MzgxMDM6N0BsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwODI0NDE5MzU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjIwMDAxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpJY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkljLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTXZUdTF6MHZpMERjV0hVV01GRHArR0p3Q25tQXpiV25VK1FnYzZVVlNJRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDcyMDAzMDkyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk2Nzg3ODAxMzZcIn0iCn0="  // PUT your SESSION_ID 


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
