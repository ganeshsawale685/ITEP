# Q.1 Peak an element

# An element is called a peak element if its value is not smaller than the value of its adjacent elements(if they exists).
# Given an array arr[] of size N, find the index of any one of its peak elements.
# Note: The generated output will always be 1 if the index that you return is correct. Otherwise output will be 0.

# Example 1:
# Input:
# N = 3
# arr[] = {1,2,3}
# Output: 1
# Explanation: index 2 is 3.
# It is the peak element as it is 
# greater than its neighbour 2.
# Example 2:
# Input:
# N = 2
# arr[] = {3,4}
# Output: 1
# Explanation: 4 (at index 1) is the 
# peak element as it is greater than 
# its only neighbour element 3.
# Constraints:
# 1 ≤ N ≤ 105
# 1 ≤ A[] ≤ 106

arr =[1,2,4,3]
size = len(arr)

for i in range(1,size-1):
        if arr[i-1] < arr[i] and arr [i] >arr[i+1]:
            print(arr[i]) 




