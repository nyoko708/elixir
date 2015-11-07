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

let chanVote = socket.channel("polls:vote", {})
let chanClear = socket.channel("polls:clear", {})

// 投票する
Vote.clickYes(function() {
  chanVote.push("vote", {body: {type: "yes", count: 1}})
})

Vote.clickNo(function() {
  chanVote.push("vote", {body: {type: "no", count: 1}})
})

$(".clear-polls").click(function() {
  $(".resultSum").html(0);
  chanClear.push("clear", {body: "clear"});
})

// 投票されたら
let yCount = 0;
let nCount = 0;
let sum = 0;
chanVote.on("vote", payload => {
  if(payload.type == "yes") {
    yCount = yCount + 1;
  } else if(payload.type == "no") {
    nCount = nCount + 1;
  }

  sum = yCount + nCount;
  $(".resultSum").html(sum);

  var data = result.getData(yCount, nCount)
  result.displayDoughnut(data)
})

chanClear.on("clear", payload => {
  var data = result.getData(0, 0)
  result.displayDoughnut(data)
  Vote.clickClear();
})

chanVote.join().receive("ok", chan => {
   console.log("vote")
})

chanClear.join().receive("ok", chan => {
   console.log("clear")
})
