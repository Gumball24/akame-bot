const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser=message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Kullanıcıyu bulunamadım.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Raporlar")
  .setColor("#292139")
  .addField("Bildirilen Kullanıcı", `${rUser} with ID: ${rUser.id}` )
  .addField("Bildiren Kişi", `${message.author} with ID: ${message.author.id}`)
  .addField("Kanal", message.channel)
  .addField("Bildirilme Zamanı", message.createdAt.toLocaleString("tr-TR"))
  .addField("Bildirilme Sebebi", reason);



  let reportschannel = message.guild.channels.find(`name`,"reports");
  if(!reportschannel) return message.channel.send("Rapor kanalı bulamadım.")

  message.delete().catch(O_o=>{});
  reportschannel.send(reportEmbed);


}

module.exports.help = {
  name: "report"


}
