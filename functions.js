function alog(message) { // here you can include all parameters that you might need
        console.log("Hola")
}

module.exports = {
    // we need to declare the name first, then add the function
    alog: function (message) { 
        console.log("Hola")
    }
    // here we can add more functions, divided by a comma
}

// if you want to export only one function
// declare it normally and then export it
module.exports = alog;