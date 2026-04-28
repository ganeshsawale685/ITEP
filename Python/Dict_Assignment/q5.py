# 🔹 5. Two Sum Problem

# Given a list and a target, find indices of two numbers that add up to target.

# Example:

# nums = [2, 7, 11, 15]
# target = 9

# 👉 Output: [0, 1]


nums = [2, 7, 11, 15]
target = 18

st,end = 0,len(nums)-1

while st<end:
    if nums[st]+nums[end] == target:
        print([st,end])
        break
    elif nums[st]+nums[end]>target:
        end-=1
    else :
        st+=1