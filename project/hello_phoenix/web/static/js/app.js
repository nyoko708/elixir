// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "deps/phoenix_html/web/static/js/phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

function goBottom(targetId) {
  var obj = document.getElementById(targetId);
  if(!obj) return;
  obj.scrollTop = obj.scrollHeight;
}

let chatInput         = $("#chat-input")
let messagesContainer = $("#messages")

// import socket from "./socket"
import {Socket} from "deps/phoenix/web/static/js/phoenix"
let socket = new Socket("/socket")

socket.connect()
let chan = socket.channel("rooms:lobby", {})

chan.join().receive("ok", chan => {
  messagesContainer.append("Welcome to Phoenix Chat!")
})


chatInput.on("keypress", event => {
  if(event.keyCode === 13){
     chan.push("new_msg", {body: chatInput.val()})
     chatInput.val("")
  }
})

chan.on("new_msg", payload => {
    console.log(payload);
    messagesContainer.append(`<br/>トイレID:${payload.wcId} 空き状況:${payload.wcStatus}`)
    goBottom("msg_bottom");
})

chan.join().receive("ok", chan => {
    console.log("Welcome to Phoenix Chat!")
})

