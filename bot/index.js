const TelegramBot = require("node-telegram-bot-api");
const token = "7451266856:AAGBAXlbZNeVkacbEWwrmsEtKFyaXFXLX3Y";
const bot = new TelegramBot(token, { polling: true });

// "/start" buyruqini qo'shish
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  for (let i = 0; i < 1000; i++) {
    bot.sendMessage(chatId, "salom");
  }
});

// "/logout" buyruqini qo'shish
bot.onText(/\/logout/, (msg) => {
  const chatId = msg.chat.id;
  // Bu yerda foydalanuvchini Telegramdan log out qilish kodi bo'lishi kerak
  // Afsuski, Telegram API foydalanuvchini majburan log out qilishni qo'llab-quvvatlamaydi.
  bot.sendMessage(chatId, "Siz Telegramdan log out qildingiz.");
});

// Foydalanuvchidan kelgan barcha xabarlarni tinglash
bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(`Received a message from ${chatId}: ${msg.text}`);
});
