import module1

print("Names defined: ", dir(module1))
print("Cached: ", __cached__)
print("loader: ", __loader__)
print("name: ", __name__)

a = 3
b = 4.5

print("test: ", dir())
