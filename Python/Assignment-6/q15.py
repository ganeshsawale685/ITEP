# Q.5 Find the kth largest and kth smallest element in array.

list =[21,5,2,10,83,54,32,54]

# list.sort()
size = len(list)
k=4
for i in range(size-1) :
    for j in range(i+1,size):
        if list[i] > list[j]:
           list[i], list[j] = list[j], list[i]

print(list)


print(f"{k}th largest {list[len(list)-k]}")
print(f"{k}th smallest {list[k-1]}")