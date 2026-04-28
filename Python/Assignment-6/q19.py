# Q.8
# Given an unsorted array arr[] of size N having both negative and positive integers. 
# The task is place all negative element at the end of array without changing the order of positive element and negative element.

# Example 1:
# Input : 
# N = 8
# arr[] = {1, -1, 3, 2, -7, -5, 11, 6 }
# Output : 
# 1  3  2  11  6  -1  -7  -5

# Example 2:
# Input : 
# N=8
# arr[] = {-5, 7, -3, -4, 9, 10, -1, 11}
# Output :


list = [1, -1, 3, 2,-7, -5, 11, 6]
i = 0
j = len(list)-1

while i < j:
    if list[i] < 0 and list[j]>0:
            list[i],list[j] = list[j],list[i]
            i+=1
            j-=1
    elif list[i] >=0:
            i+=1
    else :
           j-=1

print(list)