const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Bilgileri")
  .setColor("#292139")
  .setThumbnail(bicon)
  .addField("Adım",bot.user.username)
  .addField("Yapımcım","<@203072264030257152>" )
  .addField("Katıldığım Sunucular",bot.guilds.size)
  .addField("Beni kullananlar",bot.users.size)
  .addField("DestekServerim","https://discord.gg/z7pDgtu");









   message.channel.send(botembed);
}

module.exports.help = {
name:"botbilgi"
}
