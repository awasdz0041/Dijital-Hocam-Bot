require("dotenv").config();

const BOT_API       = process.env.BOT_API;
const PORT          = process.env.PORT || 5000;
const URL           = process.env.URL

const Telegraf  = require("telegraf");
const bot       = new Telegraf(BOT_API);

const buton = { reply_markup: { inline_keyboard: [[ { text: 'Sorular ve Cevaplar Kanalı', url: 't.me/dijitalhocamsoruhavuzu' } ]] }}
    
bot.start((ctx) => { return ctx.reply("Aşağıdaki kodları kullanarak botu kullanabilirsiniz.\n\n/yenisoru - Yeni soru sormak için ilk önce komutu yazmalısın.\n/yardim - Bot kullanım kılavuzunu açar")
                    
}); 

bot.hears('A', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
});  

bot.hears('B', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
});  

bot.hears('C', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
});   

bot.hears('D', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
});   

bot.hears('E', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
});  

bot.hears('Bilmiyorum', async (ctx, next) => {
        await ctx.replyWithHTML('Sorun başarıyla iletildi. En kısa sürede sorunun çözümü <b>Sorular ve Cevaplar</b> kanalında paylaşılacaktır.😊', buton)
    return next();
    
}); 

bot.command('yenisoru', async (ctx, next) => {
    ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorun hangi derse ait yazar mısın?</b>\n👉🏻Türkçe\n👉🏻Matematik\n👉🏻Geometri\n👉🏻Fizik\n👉🏻Kimya\n👉🏻Biyoloji\n👉🏻Türk Dili ve Edebiyatı\n👉🏻Tarih\n👉🏻Coğrafya',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Matematik/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Türkçe/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Geometri/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Fizik/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Kimya/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Biyoloji/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Türk Dili ve Edebiyatı/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Tarih/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
    return next();
    
});

bot.hears(/Coğrafya/ig, async (ctx, next) => {
        ctx.telegram.sendMessage(ctx.chat.id, '<b>Sorunun net okunalı bir fotoğrafını atabilir misin?</b>',{ parse_mode: 'HTML' })
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
