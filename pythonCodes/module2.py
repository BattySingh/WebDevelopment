import module1

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

sum = module1.add(num1, num2)

print("The sum of {} + {} is: {}.".format(num1, num2, sum))
