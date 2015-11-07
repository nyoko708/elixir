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

// import socket from "./socket"
//

import {Socket} from "deps/phoenix/web/static/js/phoenix"
let socket = new Socket("/socket")
socket.connect()
let chan = socket.channel("polls:vote", {})

let yCount = 0;
let nCount = 0;

// 投票する
Vote.clickYes(function() {
  chan.push("vote", {body: {type: "yes", count: 1}})
})

Vote.clickNo(function() {
  chan.push("vote", {body: {type: "no", count: 1}})
})

// 投票されたら
chan.on("vote", payload => {
  console.log(payload)
  data = result.getData(yCount, nCount)
  result.displayDoughnut(data)
})

chan.join().receive("ok", chan => {
   console.log("Welcome to Phoenix Chat!")
})
