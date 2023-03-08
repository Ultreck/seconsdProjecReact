import { io } from "socket.io-client";

let baseUrl;
let socket;
if(process.env.NODE_ENV ==="production"){
      baseUrl =" https://node-first-class.onrender.com";
      socket = io( "https://node-first-class.onrender.com")
      }
      else{
            baseUrl = "http://localhost:5000";
            socket = io( "http://localhost:5000")
      }

export {socket};
export default baseUrl;