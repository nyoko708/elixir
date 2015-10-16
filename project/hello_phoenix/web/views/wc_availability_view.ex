defmodule HelloPhoenix.WcAvailabilityView do
  # Webのviewモジュールを使用できるようにする(おまじないのようなもの)
  use HelloPhoenix.Web, :view

  def render("error.json", %{message: message}) do
    %{ status: "error", message: message }
  end

  def render("status.json", _) do
    %{ status: "ok", availability: "ok" }
  end

  def render("ok.json", _) do
    %{ status: "ok", update: "success" }
  end

end
