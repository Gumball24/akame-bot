const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Bilgileri.")
    .setColor("#292139")
    .setThumbnail(sicon)
    .addField("Server Adı", message.guild.name)
    .addField("Kurucu", message.guild.owner)
    .addField("Katılma zamanın", message.member.joinedAt.toLocaleDateString(`tr-TR`))
    .addField("Toplam Üye",message.guild.memberCount);

      message.channel.send(serverembed);
  }

  module.exports.help = {
    name:"serverbilgi"
  }
