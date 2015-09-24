#
# 指定した文字列を逆さにする
#

defmodule ReverseString do
  def main(str) do
    length = String.length(str)
    loop(str, 0, length, [])
  end

  def loop(str, pos, length, r) do
    if pos < length do
      val = String.at(str, pos)
      loop(str, pos+1, length, [val|r])
    else
      IO.puts r
    end
  end
end


str = "あ　いうえお abcdefg  "
ReverseString.main(str)
