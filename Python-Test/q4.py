# Find the occurance of all the number in list

lst = [1,2,3,3,5,5,6]

size = len(lst)

d ={}

for item in lst:
    d[item] = d.get(item,0)+1

print("Occurence of all number")
print(d)