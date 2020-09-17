'use strict';

const Composer = require('telegraf/composer');

const admin = 832150464

const UserName = (user) => {
    let { first_name = ``, last_name = ``} = user;
    if (!first_name && !last_name) {
        first_name = `Deleted`;
        last_name = `Account`;
    }
    const fullName = `${first_name} ${last_name}`
    let text = `${fullName}`;
    return text;
};

module.exports = Composer.mount('message', async (ctx, next) => {
    if (ctx.chat.type.endsWith('private')) {
    if (ctx.updateSubTypes[0] === 'photo') { 
ctx.replyWithHTML('Son olarak cevap anahtarını yazar mısın?\n👉A\n👉B\n👉C\n👉D\n👉E\n👉Bilmiyorum', { reply_to_message_id: ctx.message.message_id })
}
        await ctx.telegram.sendMessage(admin)
        await ctx.forwardMessage(admin, ctx.chat.id, `${ctx.message.message_id}`)
    }
    return next();
})
