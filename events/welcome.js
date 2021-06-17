const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        var a = moment();
        var b = moment(member.user.createdAt);
        var years = a.diff(b, 'year');
            b.add(years, 'years');
        var months = a.diff(b, 'months');
            b.add(months, 'months');
        var days = a.diff(b, 'days');

        if (Date.now() - member.user.createdAt < 1000*60*60*2) return member.ban({days: 7, reason: 'Raid acc?'});
        let wmch = bot.channels.cache.get('831258860857589832');
        let chn = bot.channels.cache.get('216708657440620544');
        let chn2 = bot.channels.cache.get('826988730849296426');
        let Welcomelog = new Discord.MessageEmbed()
            .setColor("#15d438")
            .setThumbnail(member.user.displayAvatarURL())
            .setAuthor(`${member.user.username} | Entrou no servidor`, member.user.displayAvatarURL())
            .setDescription(`${member} ${member.user.tag}\n **Conta criada há**:\n ${years} anos, ${months} meses e ${days} dias`)
            .setFooter(`ID: ${member.id}`)
            .setTimestamp();

        let Welcomemsg = new Discord.MessageEmbed()
            .setColor("#d505ff")
            .setAuthor(`${member.user.username} | Entrou no servidor`, member.user.displayAvatarURL())
            .setDescription(`Seja bem-vindo, <@${member.id}>. Por favor, leia as <#${chn.id}> e se divirta.\n \nPara pegar o cargo de **Lançamentos** e ser pingado quando tiver novo lançamento no site, visite o canal <#${chn2.id}> e reaja com o emoji do(s) cargo(s) desejado(s).`)
            .setImage('https://cdn.discordapp.com/attachments/846471009950367824/846471210391830609/Lala_Bem-vindo.gif')
            .setTimestamp();

        wmch.send(Welcomemsg);
        bot.channels.cache.get('454111723872321536').send(Welcomelog);
        member.roles.add('746381043623395359');
    }
}