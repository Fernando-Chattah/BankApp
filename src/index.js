const app = require("./app");

async function init () {
    await app.listen();
    console.log("Server on port 3000");
}

init();
