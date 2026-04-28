#  Sort the array of 0s , 1s and 2s.
lst = [0,1,1,2,0,0,1,2,0,2,2,1,1,0]

i = c = 0
j = len(lst)-1

while c<j:
    if lst[c] ==0 :
        lst[i],lst[c] = lst[c],lst[i]
        i+=1
        c+=1
    elif lst[c] ==1:
        c+=1
    else :
        lst[c],lst[j] = lst[j],lst[c]
        j-=1
print(lst)

# zero_count = one_count = two_count =0

# print(lst)
# for element in lst:
#     if element == 0:
#         zero_count+=1
#     elif element == 1:
#         one_count+=1
#     else :
#         two_count+=1

# lst = [0]*zero_count+[1]*one_count+[2]*zero_count

# print(lst)