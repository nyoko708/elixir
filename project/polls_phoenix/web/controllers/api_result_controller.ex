defmodule PollsPhoenix.ApiResultController do
  use PollsPhoenix.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end