const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect',(messagefromserver) => {
    console.log('Connected!');
  });
  conn.on('connect', () => {
    conn.write("Name: MJL");
  });
  conn.on('data',(messagefromserver) => {
    console.log('message from server:', messagefromserver);
  });
  
  return conn;
};
console.log("Connecting ...");
connect();
module.exports = {
  connect
}