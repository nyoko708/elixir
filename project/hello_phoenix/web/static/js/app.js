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

function dateFormat(format) {
  if (!format) format = 'YYYY-MM-DD hh:mm';
  let date =  new Date();
  format = format.replace(/YYYY/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  if (format.match(/S/g)) {
    var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
    var length = format.match(/S/g).length;
    for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
  }
  return format;
};

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

chan.on("new_msg", payload => {
    console.log(payload);
    let id = "#wc_10_men_"+payload.wcId
    let wcImage = $(id)
    if(payload.wcStatus == "ok") {
      wcImage.attr("src","/images/vacant_wc.png")
    } else if(payload.wcStatus == "ng") {
      wcImage.attr("src","/images/occupied_wc.png")
    }
    let date = dateFormat();
    messagesContainer.append(`<br/>${date} トイレID:${payload.wcId} 空き状況:${payload.wcStatus}`)
    goBottom("msg_bottom");
})
