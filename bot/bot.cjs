const { Telegraf } = require("telegraf");
require('dotenv').config({ path: '.env' });
const TOKEN = process.env.API_TOKEN; // Production bot
const bot = new Telegraf(TOKEN);
const web_link = "https://miniapp.spore.ws/";
bot.start((ctx) =>
  ctx.reply("Welcome", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();