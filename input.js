let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = (key) =>{
    if (key === '\u0003') {
      process.exit();
    }
    if (key === "w") {
      conn.write("Move: up");
      console.log("press w")
    }
    if (key === "s") {
      conn.write("Move: down");
      console.log("press s")
    }
    if (key === "a") {
      conn.write("Move: left");
        console.log("press a")
    }
    if (key === "d") {
      conn.write("Move: right");
      console.log("press d")
    }
  }
  stdin.on("data", (key) => {handleUserInput(key)});
  return stdin;
};
module.exports = {setupInput};