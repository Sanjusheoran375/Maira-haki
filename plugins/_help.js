const os = require("os");
const fs = require("fs");
const Config = require("../config");
let {
  fancytext,
  tlang,
  tiny,
  runtime,
  formatp,
  prefix,
  smd,
  commands,
} = require("../lib");
const long = String.fromCharCode(8206);
const readmore = long.repeat(4001);
const astro_patch = require("../lib/plugins");
const { exec } = require("child_process");
const translatte = require("translatte");

smd(
  {
    pattern: "menus",
    type: "MENU list",
    info: "user",
    dontAddCommandList: true,
  },
  async (message) => {
    try {
      let menuMessage = ` 
╰┈➤ʀᴜɴᴛɪᴍᴇ - ${runtime(process.uptime())} 
╰┈➤ᴅᴀᴛᴇ - ${message.date} 
╰┈➤ɴᴏᴡ ᴛɪᴍᴇ - ${message.time} 
╰┈➤Fᴏᴜɴᴅᴇʀ- *Star King*
╰┈➤Oᴡɴᴇʀ - ${Config.ownername} 
╰┈➤Nᴜᴍ - ${owner.split(",")[0]} 
╰┈➤Mᴇᴍᴏ - ${formatp(os.totalmem() - os.freemem())} 
      \n *qᴜᴇᴇɴ✿︎ᴍᴀʀɪᴀ*\n\n ${readmore} 
╭──👑 *ALL MENU* 👑 
╰┈➤☽︎ 𝕃ist
╰┈➤☽︎ ℂategory
╰┈➤☽︎ ℍelp 
╰┈➤☽︎ 𝔸live 
╰┈➤☽︎ 𝕌ptime 
╰┈➤☽︎ 𝕎eather
╰┈➤☽︎ 𝕃ino 
╰┈➤☽︎ ℂpu
╰┈➤☽︎ ℝepo
╰─────────────⦁`.trim();
      return await message.bot.sendUi(message.from, { caption: menuMessage });
    } catch (error) {
      await message.error(error + "\nCommand:menus", error);
    }
  }
);
// Command: Set Custom Command
astro_patch.cmd(
  {
    pattern: "setcmd",
    desc: "To set a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      if (!query) {
        return await message.send(
          "*_Please provide cmd name by replying a Sticker_*"
        );
      }

      let queryParts = query.split(",");
      let newCommand, originalCommand;
      let isSticker = false;

      if (message.quoted) {
        let quotedType = message.quoted.mtype;
        if (quotedType === "stickerMessage" && query) {
          isSticker = true;
          newCommand = query.split(" ")[0];
          originalCommand = "sticker-" + message.quoted.msg.fileSha256;
        }
      }

      if (!isSticker && queryParts.length > 1) {
        originalCommand = queryParts[0].trim().toLowerCase();
        newCommand = queryParts[1].trim().toLowerCase();
      } else if (!isSticker) {
        return await message.send(
          "*_Uhh Dear, Give Cmd With New Name_*\n*Eg: _.setcmd New_Name, Cmd_Name_*"
        );
      }

      if (newCommand.length < 1) {
        return await message.reply(
          "*_Uhh Please, Provide New_Cmd Name First_*"
        );
      }

      if (global.setCmdAlias[newCommand]) {
        return await message.send(
          `*_"${isSticker ? "Given Sticker" : newCommand}" Already set for "${
            global.setCmdAlias[newCommand]
          }" Cmd, Please try another ${isSticker ? "Sticker" : "Name"}_*`
        );
      }

      const foundCommand =
        astro_patch.commands.find((cmd) => cmd.pattern === originalCommand) ||
        astro_patch.commands.find(
          (cmd) => cmd.alias && cmd.alias.includes(originalCommand)
        );

      if (foundCommand) {
        global.setCmdAlias[newCommand] = foundCommand.pattern;
        return await message.send(
          `*_Cmd "${global.setCmdAlias[newCommand]}" Successfully set to "${
            isSticker ? "Sticker" : newCommand
          }"._*\n*_These all names are reset if the bot restarts_*`
        );
      } else {
        return await message.send(
          `*_Provided Cmd (${originalCommand}) not found in bot commands. Please provide a valid command name_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:setcmd", error);
    }
  }
);

// Command: Delete Custom Command
astro_patch.cmd(
  {
    pattern: "delcmd",
    desc: "To delete a custom command",
    category: "tools",
    fromMe: true,
    filename: __filename,
  },
  async (message, query, { Void }) => {
    try {
      let commandName = query ? query.split(" ")[0].trim().toLowerCase() : "";
      let isSticker = false;

      if (message.quoted) {
        if (message.quoted.mtype === "stickerMessage") {
          isSticker = true;
          commandName = "sticker-" + message.quoted.msg.fileSha256;
        } else if (!query) {
          return await message.send(
            "*_Please reply to a Sticker that was set for a command_*"
          );
        }
      } else if (!query) {
        return await message.send(
          "*_Uhh Dear, provide the name that was set for a command_*\n*Eg: _.delcmd Cmd_Name_*"
        );
      }

      if (global.setCmdAlias[commandName]) {
        await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" deleted successfully for "${
            global.setCmdAlias[commandName]
          }" command_*`
        );
        delete global.setCmdAlias[commandName];
        return;
      } else {
        return await message.send(
          `*_"${
            isSticker ? "Given Sticker" : commandName
          }" is not set for any command._*\n *_Please provide a valid ${
            isSticker ? "Sticker" : "command name"
          } to delete_*`
        );
      }
    } catch (error) {
      await message.error(error + "\nCommand:delcmd", error);
    }
  }
);

// Command: Ping
smd(
  {
    pattern: "ping",
    react: "⚡",
    desc: "Types 'I am Queen Maria and my speed is' and shows ping",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    const text = "I am Queen Maria and my speed is: ";
    let typedMessage = "";

    // Measure start time for the ping calculation
    var startTime = new Date().getTime();

    // Send initial message
    const { key } = await message.reply("*Typing...*");

    // Type one character at a time
    for (let i = 0; i < text.length; i++) {
      typedMessage += text[i];
      await new Promise((resolve) => setTimeout(resolve, 500)); // Delay of 500ms between characters
      await message.send(`**${typedMessage}**`, { edit: key });
    }

    // Calculate the ping time
    var endTime = new Date().getTime();
    var speed = endTime - startTime;

    // Final message with speed
    await message.send(`**${typedMessage}${speed} ms**`, { edit: key });
  }
);

// Command: Uptime
astro_patch.cmd(
  {
    pattern: "uptime",
    alias: ["runtime"],
    desc: "Tells runtime/uptime of bot.",
    category: "misc",
    filename: __filename,
  },
  async (message) => {
    try {
      message.reply(
        `*_Uptime of ${tlang().title}: ${runtime(process.uptime())}_*`
      );
    } catch (error) {
      await message.error(error + "\n\ncommand : uptime", error, false);
    }
  }
);

// Command: List Menu
astro_patch.cmd(
  {
    pattern: "list",
    desc: "list menu",
    category: "user",
    react: "🥀",
  },
  async (message) => {
    try {
      const { commands } = require("../lib");
      let listMessage = `\n  
╭━━╰┈➤ * ${Config.botname} * 👈    
┃ ☾╰┈➤ ☽︎ 𝚙𝚛𝚎𝚏𝚒𝚡: ${Config.HANDLERS}
┃ ☾╰┈➤ ☽︎ 𝚘𝚠𝚗𝚎𝚛: ${Config.ownername}
┃ ☾︎╰┈➤ ☽︎ Co𝚖𝚖𝚊𝚗𝚍𝚜: ${commands.length}
┃ ☾╰┈➤ ☽︎ 𝚄𝚙𝚝𝚒𝚖𝚎: ${runtime(process.uptime())}
┃ ☾╰┈➤ *☽︎ 𝙼𝚎𝚖: ${formatp(os.totalmem() - os.freemem())}
╰━━━━━━━━━━━━━━⊷\n`;

      for (let i = 0; i < commands.length; i++) {
        if (commands[i].pattern === undefined) {
          continue;
        }
        listMessage += `*${i + 1} ${fancytext(commands[i].pattern, 1)}*\n`;
        listMessage += `  ${fancytext(commands[i].desc, 1)}\n`;
      }

      return await message.sendUi(message.chat, {
        caption: listMessage + Config.caption,
      });
    } catch (error) {
      await message.error(error + "\nCommand:list", error);
    }
  }
);

// Command: Owner
astro_patch.smd(
  {
    pattern: "owner",
    desc: "To display owner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      const vcard =
        "BEGIN:VCARD\nVERSION:3.0\nFN:" +
        Config.ownername +
        "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
        global.owner?.split(",")[0] +
        ":+" +
        global.owner?.split(",")[0] +
        "\nEND:VCARD";

      let contactMessage = {
        contacts: {
          displayName: Config.ownername,
          contacts: [
            {
              vcard,
            },
          ],
        },
        contextInfo: {
          externalAdReply: {
            title: Config.ownername,
            body: "Touch here.",
            renderLargerThumbnail: true,
            thumbnailUrl: "",
            thumbnail: log0,
            mediaType: 1,
            mediaUrl: "",
            sourceUrl:
              "https://wa.me/+" +
              global.owner?.split(",")[0] +
              "?text=Hii+" +
              Config.ownername,
          },
        },
      };

      return await message.sendMessage(message.jid, contactMessage, {
        quoted: message,
      });
    } catch (error) {
      await message.error(error + "\nCommand:owner", error);
    }
  }
);

// Command: Translate
astro_patch.smd(
  {
    pattern: "subowner",
    desc: "To display subowner information",
    category: "owner",
    filename: __filename,
  },
  async (message) => {
    try {
      // Define subowners list
      const subowners = [
        { name: "Subowner1", waid: "2349112171078" },
        { name: "Subowner2", waid: "263710405675" },
        { name: "Subowner3", waid: "2349123721026" }
      ];

      // Construct contact messages for each subowner
      let contactMessages = subowners.map(subowner => {
        const vcard =
          "BEGIN:VCARD\nVERSION:3.0\nFN:" +
          subowner.name + // Subowner's name
          "\nORG:;\nTEL;type=CELL;type=VOICE;waid=" +
          subowner.waid + // Subowner's WhatsApp ID
          ":+" +
          subowner.waid +
          "\nEND:VCARD";

        return {
          contacts: {
            displayName: subowner.name,
            contacts: [
              {
                vcard,
              },
            ],
          },
          contextInfo: {
            externalAdReply: {
              title: subowner.name,
              body: "Touch here.",
              renderLargerThumbnail: true,
              thumbnailUrl: "",
              thumbnail: log0,
              mediaType: 1,
              mediaUrl: "",
              sourceUrl:
                "https://wa.me/+" +
                subowner.waid +
                "?text=Hello+" +
                subowner.name,
            },
          },
        };
      });

      // Send each contact message
      for (let contactMessage of contactMessages) {
        await message.sendMessage(message.jid, contactMessage, {
          quoted: message,
        });
      }
      
    } catch (error) {
      await message.error(error + "\nCommand:subowner", error);
    }
  }
);
