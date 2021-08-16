const { MessageEmbed }=require('discord.js');
const model = user => {
    let embed = new MessageEmbed()
        .setColor("#0000FF")
        .setTitle(`Avatar de ${user.tag}`)
        .setURL(user.avatarURL({size: 2048, dynamic: true}))
        .setImage(user.avatarURL({size: 2048, dynamic: true}));

    return embed
};

module.exports = {
    name: 'avatar',
    description: 'Envia o avatar da(s) pessoa(s) mencionada(s)',
    
    execute({message}) {
        message.delete({timeout: 30});
        
        if(message.mentions.users.size) {
            message.mentions.users.forEach(user=>{
                message.channel.send({ embeds: [model(user)] })
            });
        }else
            message.channel.send({ embeds: [model(message.author)] });
    }
}
