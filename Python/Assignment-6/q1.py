# 1. WAP to Enter n element in array and print array

size = int(input("Enter the size of list "))

list =[]

for i in range(0,size):
    li = eval(input(f"Enter the element {i} "))
    list.append(li)

print(list)