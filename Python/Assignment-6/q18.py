# Q.7 Sub array with given sum
# Given an unsorted array A of size N that contains only non-negative integers, find a continuous sub-array which adds to a given number S.

# Example 1:
# Input:
# N = 5, S = 12
# A[] = {1,2,3,7,5}
# Output: 2 4
# Explanation: The sum of elements 
# from 2nd position to 4th position 
# is 12.

# Example 2:
# Input:
# N = 10, S = 15
# A[] = {1,2,3,4,5,6,7,8,9,10}
# Output: 1 5
# Explanation: The sum of elements 
# from 1st position to 5th position
# is 15.
# 1 <= N <= 105
# 1 <= Ai <= 109

lst = [1,2,3,7,5]
s =12 
csum = 0
flag=False

for i in range(len(lst) -1):
    csum = lst[i]
    for j in range(i+1,len(lst)):
        csum = csum + lst[j]
        if csum == s:
            flag=True
            break
        elif csum>s:
            break
    if flag:
        break

print(f"{i+1},{j+1}" if flag else "{-1}")