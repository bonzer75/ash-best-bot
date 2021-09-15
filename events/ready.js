module.exports = (client) => {
  
    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: client.config.game, 
          type: "PLAYING"
        }
      }
    ); 
  }