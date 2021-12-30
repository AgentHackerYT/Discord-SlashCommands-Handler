const Discord = require('discord.js')

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS]})

const config = require('./config')

client.on("ready", async() =>{

console.log("Ready")

    let commands = client.application?.commands

   fs.readdir(__dirname + "/commands" , (err , data) =>{

        data.forEach(r => {

        const command = require(`./commands/${r}`)

        commands?.create({name: command.name, description: command.description, options: command.options})

        })
    
    })

    

client.on("interactionCreate", (interaction) =>{
    if(!interaction.isCommand()) return;

    fs.readdir(__dirname + "/commands", (err , files) =>{
        files.forEach(data =>{
            console.log(data)
      const command = require(`./commands/${data}`)
        if(interaction.commandName == command.name){
                command.run(interaction, client)
        }
        })
        
    })

  })
  
  client.login(config.token)
