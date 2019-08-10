dividend = int(input("Enter an Integer Dividend: "))
divisor = int(input("Enter the divisor: "))

quotient = dividend // divisor
remainder = dividend % divisor

print("The quotient of {} divided by {} is {} with the remainder: {}.".format(dividend, divisor, quotient, remainder))
