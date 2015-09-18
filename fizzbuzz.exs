#
# FizzBuzz問題
#

defmodule Fizzbuzz do
  def loop(count) when count == 100 do
    IO.puts "Finish";
  end

  def loop(count) do
    hitFizzBuzz(count)
    loop(count + 1)
  end

  def hitFizzBuzz(i) do
    case i do
      i when rem(i, 3) == 0 and rem(i, 5) == 0 ->
        IO.puts "FizzBuzz"
      i when rem(i, 3) == 0 ->
        IO.puts "Fizz"
      i when rem(i, 5) == 0 ->
        IO.puts "Buzz"
      i ->
        IO.puts i
    end
  end
end

Fizzbuzz.loop(1)
