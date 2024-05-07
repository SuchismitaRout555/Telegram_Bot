const  axios = require('axios');
const { Telegraf } = require('telegraf');

/**
 *  how  to get the secret token for creTING a bot?
 * -->  botfather in tg
 * --> name the new bot 
 *  t.me/giftQbank_bot
 */

const bot = new Telegraf('6633796572:AAEtRJXY2oSCgT4zfS5oyIN0MM1SHgoaGZA');
bot.start((ctx)=> ctx.reply(' Welcome to the GIFT Previous Years Question Bank'));

bot.command('cse' ,  async function(ctx){
    const response= await axios.get('https://github.com/SuchismitaRout555/GIFT-Question-Bank/blob/main/GIFT-Qbank/img/1stsem-btech-23-24.pdf')
    console.log(response.data);
    return ctx.reply(response.data);
})
bot.launch();