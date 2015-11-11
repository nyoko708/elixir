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

// 投票結果系
let yCount = 0;
let nCount = 0;
let sum = 0;

// 初期値1,1で見せる。0,0だとうまく円グラフが表示されなかった
let data = Result.getData(1, 1)
let chartObj = Result.getObjOfDoughnut(data);


// 投票する
Vote.clickYes(function() {
  chanVote.push("vote", {body: {type: "yes", count: 1}})
})

Vote.clickNo(function() {
  chanVote.push("vote", {body: {type: "no", count: 1}})
})

$(".clear-polls").click(function() {
  $(".resultSum").html(0);
  $(".resultYes").html(0);
  $(".resultNo").html(0);
  chanClear.push("clear", {body: "clear"});
})

// 投票されたら
chanVote.on("vote", payload => {

  let tmpNum = 0;

  // 「はい」「いいえ」のどちらかに投票されたらインクリメントして、
  // チャートをupdateする
  if(payload.type == "yes") {
    yCount = yCount + 1
    tmpNum = yCount;
  } else if(payload.type == "no") {
    nCount = nCount + 1
    tmpNum = nCount
  }
  Result.updateDoughnut(payload.type, tmpNum)

  // 初期値が「はい:1」「いいえ:1」なので、「はい」、「いいえ」どちらかのカウントが
  // 0のままの場合は「0」に戻す必要がある。でないと初期値の1が足されてしまう
  if(yCount == 0) {
    Result.updateDoughnut("yes", 0)
  } else if(nCount == 0) {
    Result.updateDoughnut("no", 0)
  }

  // 合計数表示
  sum = yCount + nCount;
  $(".resultSum").html(sum);
  $(".resultYes").html(yCount);
  $(".resultNo").html(nCount);
})

// 投票をクリアする
chanClear.on("clear", payload => {
  Result.updateDoughnut("yes", 1)
  Result.updateDoughnut("no", 1)
  Vote.clickClear()
  yCount = 0
  nCount = 0
})

chanVote.join().receive("ok", chan => {
   console.log("vote")
})

chanClear.join().receive("ok", chan => {
   console.log("clear")
})
