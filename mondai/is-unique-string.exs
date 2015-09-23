#
# 指定した文字列に重複があるかどうか判定する
#

defmodule IsUniqueString do

  strs = []

  def main(str) do
    length = String.length(str)

    to_array_string(str, length, 0)
  end

  def to_array_string(str, length, pos) do
    if 0 <= pos && pos < length do
      List.insert_at(strs, pos, String.at(str, pos))
      to_array_string(str, length, pos+1)
    end
  end

end


str = "あいうえおabcdefg"
IsUniqueString.main(str)
