# Q.4 Write a program to sort the array

list =[21,5,2,10,83,54]

# list.sort()
size = len(list)

for i in range(size-1) :
    for j in range(i+1,size):
        if list[i] > list[j]:
           list[i], list[j] = list[j], list[i]

print(list)