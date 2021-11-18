module.exports = (client, config) => {  
    client.user.setPresence( 
      {
        status: "online", 
        game: { 
          name: "Lunar Client", 
          type: "PLAYING"
        }
      }
    ); 
  } // https://youtu.be/ySeXuAdt6Kk https://www.youtube.com/watch?v=E5DMLZUSHO8