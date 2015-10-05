#
# 文字列の中にスペースがあれば、「%20」に置き換える
#

defmodule ReplaceSpaces do

  def main(str) do
    length = String.length(str)
    replace(str, 0, length, [])
  end

  defp replace(str, count, length, replace_strs) do
    if count < length do
      val = String.at(str, count)
      if val == " " do
        val = "%20"
      end
      replace(str, count+1, length, [replace_strs|val])
    else
      replace_strs
    end
  end
end


str = "a  bcd ef g "
IO.puts String.length(str)
IO.puts str
IO.puts ReplaceSpaces.main(str)
