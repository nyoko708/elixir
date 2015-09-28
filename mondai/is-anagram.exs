#
# ２つの文字がアナグラムかどうか判定する
#

defmodule IsAnagram do
  def main(str1, str2) do
    strs1 = _sort(str1)
    strs2 = _sort(str2)

    if strs1 != strs2 do
      false
    else
      true
    end
  end

  defp _sort(str) do
    str = String.strip(str)
    str = String.replace(str, " ", "")
    strs = String.split(str, "")
    strs = Enum.sort(strs)
    strs
  end
end


str1 = "aanagrams"
str2 = "ars magna"
IO.puts IsAnagram.main(str1, str2)
