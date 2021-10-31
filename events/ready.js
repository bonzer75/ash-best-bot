module.exports = (client) => {  
    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: client.config.status, 
          type: "PLAYING"
        }
      }
    ); 
  }