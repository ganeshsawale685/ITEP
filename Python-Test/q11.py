lst = [1,2,2,3,3,3,4,4,5,6,7,7,8]
i, j = 0, 1
while j < len(lst):
    if lst[i] != lst[j]:
        i += 1
        lst[i], lst[j] = lst[j], lst[i]
    j += 1

print(lst)