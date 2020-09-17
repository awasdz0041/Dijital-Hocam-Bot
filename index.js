require("dotenv").config();

const BOT_API       = process.env.BOT_API;
const PORT          = process.env.PORT || 5000;
const URL           = process.env.URL

const Telegraf  = require("telegraf");
const bot       = new Telegraf(BOT_API);

const buton = { reply_markup: { inline_keyboard: [[ { text: 'Kanal', url: 't.me/botsohbet' } ]] }}
    
bot.start((ctx) => { return ctx.reply("Aşağıdaki kodları kullanarak botu kullanabilirsiniz.\n/yardim - Bot kullanım kılavuzunu açar\n/yenisoru - Yeni soru sormak için ilk önce komutu yazmalısın.")
    
});

bot.hears(/bota verilen cevap/ig, async (ctx, next) => {
        await ctx.replyWithHTML('Sorular ve Cevaplar', buton)
    return next();
    
});   

bot.command('yenisoru', async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Sorun hangi derse ait yazar mısın?\n👉🏻Türkçe\n👉🏻Matematik\n👉🏻Geometri\n👉🏻Fizik\n👉🏻Kimya\n👉🏻Biyoloji\n👉🏻Türk Dili ve Edebiyatı\n👉🏻Tarih\n👉🏻Coğrafya')
    return next();
    
});

bot.hears(/Matematik/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Türkçe/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Geometri/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Fizik/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Kimya/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Biyoloji/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Türk Dili ve Edebiyatı/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Tarih/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});

bot.hears(/Coğrafya/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun net okunalı bir fotoğrafını atabilir misin?')
    return next();
    
});
      
bot.hears(/A/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Sorun başarıyla iletildi. En kısa sürede sorunun çözümü 👉<a href="https://t.me/dijitalhocamsoruhavuzu">Sorular ve Cevaplar</a> kanalında paylaşılacaktır.😊',{ parse_mode: 'HTML' })
    return next();
    
});



bot.use(
    require('./handlers/middlewares'),
    require('./plugin')
);


bot.telegram.getMe().then(me => {
    console.log(`Bot Başlatıldı! => ${me.username}`);
});


bot.catch((err) => {
    console.log('Error: ', err)
})

bot.launch({
  webhook: {
    domain: `${URL}`,
    port: `${PORT}`
  }
})
