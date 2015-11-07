defmodule PollsPhoenix.PollsChannel do
  use Phoenix.Channel

  def join("polls:vote", auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("vote", message, socket) do
    IO.puts message
    broadcast! socket, "vote", message
    {:noreply, socket}
  end

  def handle_out("vote", payload, socket) do
    push socket, "vote", payload
    {:noreply, socket}
  end

end
