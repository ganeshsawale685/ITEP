# 10.WAP to to count the occurance of all element in array

list = [1,2,3,3,5,5,6]

size = len(list)

dict ={}

# for i in list:
#     if dict.get(i):
#         dict[i] =dict[i]+1
#     else:
#         dict[i] = 1

for item in list:
    dict[item] = dict.get(item,0)+1

print(dict)