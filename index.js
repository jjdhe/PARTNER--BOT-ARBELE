const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**خۆت لە ڤۆیس نیت بیمە کوێ من**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`https://discord.gg/VkPX4tkfr2`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("781974291851771904").send(
`> sent By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`شتێک بنوسە بۆ ستریمینگ`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("Nzk0NTAyNDU4NzMwMjE3NDcz.X-7wEw.xGOk2EzLfQv2BJORbkC5ACU3X_8");//تۆکین لێرە دانێ
