defmodule PollsPhoenix.PollsChannel do
  use Phoenix.Channel

  def join("polls:vote", auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("vote", message, socket) do
    #IO.inspect message["body"]["type"]
    broadcast! socket, "vote", %{ type: message["body"]["type"] }
    {:noreply, socket}
  end

  def handle_out("vote", payload, socket) do
    push socket, "vote", payload
    {:noreply, socket}
  end


  def join("polls:clear", auth_msg, socket) do
    {:ok, socket}
  end

  def handle_in("clear", message, socket) do
    #IO.inspect message["body"]["type"]
    broadcast! socket, "clear", %{ clear: message["clear"] }
    {:noreply, socket}
  end

  def handle_out("clear", payload, socket) do
    push socket, "clear", payload
    {:noreply, socket}
  end

end
