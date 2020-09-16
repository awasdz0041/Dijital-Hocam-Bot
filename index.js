require("dotenv").config();

const BOT_API       = process.env.BOT_API;
const PORT          = process.env.PORT || 5000;
const URL           = process.env.URL

const Telegraf  = require("telegraf");
const bot       = new Telegraf(BOT_API);


bot.start((ctx) => {
    return ctx.reply("Aşağıdaki kodları kullanarak botu kullanabilirsiniz. System.out.println(/yardim - Bot kullanım kılavuzunu açar.); System.out.println(/yenisoru - Her yeni soru için bu komutu gitmelisin.);");
});

bot.hears(/merhaba/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'merhaba ben bot')
    return next();

});

bot.hears(/Matematik/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, 'Son olarak cevap anahtarını yazar mısın?')
    return next();
    
});

bot.command('yenisoru', async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Sorunun dersini belirtir misin?')
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
