var b = require("bonescript");

//Reload configuration
process.on("SIGUSR2", function () {
    
});

process.on("SIGTERM", process.exit);
process.on("SIGINT", process.exit);

require("daemon")();