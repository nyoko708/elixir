defmodule PollsPhoenix.Router do
  use PollsPhoenix.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PollsPhoenix do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/vote", VoteController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", PollsPhoenix do
    pipe_through :api

    resources "/vote", ApiVoteController, only: [:create]
    resources "/result", ApiResultController, only: [:index]
  end
end
