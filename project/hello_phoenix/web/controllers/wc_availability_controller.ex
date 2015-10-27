defmodule HelloPhoenix.WcAvailabilityController do
  # Webのcontrollerモジュールを使用できるようにする(おまじないのようなもの)
  use HelloPhoenix.Web, :controller

  # show アクション
  #  conn - リクエスト情報を保持
  #  params - クエリストリングやフォーム入力などのパラメータ
  def show(conn, params) do
    if paramCheck(params) == false do
      render conn, "error.json", message: "param error"
    else
      render conn, "status.json"
    end
  end

  # update アクション
  #  conn - リクエスト情報を保持
  #  params - リクエストストリングやフォーム入力などのパラメータ
  def update(conn, params) do
    if paramCheck(params) == false do
      render conn, "error.json", message: "param error"
    else

      # どのトイレかID取得
      wcId = params["id"]

      # そのトイレが開いているか開いていないか?
      wcStatus = params["status"]

      # スタータスをファイルに書き込み

      # APIにアクセスが来たらブロードキャストする
      HelloPhoenix.Endpoint.broadcast! "rooms:lobby", "new_msg", %{ok: "ok", sex: params["sex"], wcId: wcId, wcStatus: wcStatus}
      render conn, "status.json"
    end
  end

  # 引数チェック
  #
  defp paramCheck(params) do
    if params["sex"] != "man" && params["sex"] != "woman" do
      false
    else
      true
    end
  end
end
