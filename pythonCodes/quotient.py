dividend = int(input("Enter the number to be divided: "))
divisor = int(input("Enter the number to be divided with: "))

quotient = dividend // divisor
remainder = dividend % divisor

print("The quotient of ", dividend, " and ", divisor, " is ", quotient, " with a remainder of ", remainder, sep="")
