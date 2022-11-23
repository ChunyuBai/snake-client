const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("hello! from client");
  });
  // name my snake
  // conn.on("connect",() => {
  //   conn.write("Name: CYB");
  // });
  //move my snake
  // conn.on("connect", () => {    
  //   setInterval(() => {
  //     setTimeout(() => {
  //       conn.write("Move: up");
  //     },0)
  //     setTimeout(() => {
  //       conn.write("Move: left");
  //     },500)
  //     setTimeout(() => {
  //       conn.write("Move: down");
  //     },1000)
  //     setTimeout(() => {
  //       conn.write("Move: right");
  //     },1500)
  //   }, 1500);
  // }) 
  return conn;
};

// console.log("Connecting ...");
// connect();
module.exports = { connect };
