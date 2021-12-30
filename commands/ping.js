module.exports = {

    name: "ping",

    description: "Returns Pong!",

    run: function(interaction, client){
      
      interaction.reply({content: "Pong!"})
      
    }
  
}
