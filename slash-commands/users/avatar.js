const { MessageEmbed } = require('discord.js')
const { manager } = require('../../utils/manager')

const model = user => {
    let embed=new MessageEmbed()
        .setColor(0x0000FF)
        //.setTitle(manager.logger("avatar", null, null, null, user))
        .setURL(user.avatarURL({size: 2048, dynamic: true}))
        .setImage(user.avatarURL({size: 2048, dynamic: true}));

    return embed
}

module.exports = {
    name: "avatar",
    description: "teste",
    enable: 1,
    async execute({int}) {
        if (int.options.data.map(({user}) => user).length >= 1) {
            await int.deferReply()

            await int.options.data.map(({user}) => user).forEach(user => {
                int.followUp({ embeds: [model(user)] })
            });
        } else {
            const embed = new MessageEmbed()
                .setColor(0x0000FF)
                .setImage(int.user.avatarURL({size: 2048, dynamic: true}));
            return await int.reply( {embeds: [model(int.user)] })
        }
    }
}
