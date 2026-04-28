# . WAP to replace all element with 0 which is multiple of 5

list = [1,2,3,4,5]

size = len(list)
for idx in range(size):
    list[idx] = list[idx] *10

print(list)