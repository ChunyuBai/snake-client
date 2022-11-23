// const net = require("net");
const {connect} = require("./client");
const { setupInput } = require("./input");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "165.227.47.243",// IP address here,
//     port: 50541// PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//     console.log("hello! from client");
//   });
//   return conn;
// };
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   const handleUserInput = (key) =>{
//     if (key === '\u0003') {
//       process.exit();
//     }
//   }
//   stdin.on("data", (data) => {handleUserInput(data)});
//   return stdin;
// };

console.log("Connecting ...");
const conn = connect();
setupInput(conn);