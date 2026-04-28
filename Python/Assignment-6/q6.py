# WAP to sort the array

list =[21,5,2,10,83,54]

# list.sort()
size = len(list)

for i in range(size) :
    for j in range(0,size-i-1):
        if list[j] > list[j+1]:
           list[j], list[j + 1] = list[j + 1], list[j]

print(list)