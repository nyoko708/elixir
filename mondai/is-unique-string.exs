#
# 指定した文字列に重複があるかどうか判定する
#

defmodule IsUniqueString do

  def main(str) do
    length = String.length(str)
    status = loop_string(str, length, 0)
    if status == nil do
      IO.puts true
    else
      IO.puts false
    end
  end

  def loop_string(str, length, pos) do
    if 0 <= pos && pos < length do
      val = String.at(str, pos)
      status = check_unique(val, str, length, pos+1)
      if status == false do
        false
      else
        loop_string(str, length, pos+1)
      end
    end
  end

  def check_unique(val, str, length, pos) do
    if 0 <= pos && pos < length do
      if val == String.at(str, pos) do
        false
      else
        check_unique(val, str, length, pos+1)
      end
    end
  end

end


str = "あいうえおabcdefg"
IsUniqueString.main(str)
