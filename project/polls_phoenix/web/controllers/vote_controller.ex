defmodule PollsPhoenix.VoteController do
  use PollsPhoenix.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
