#  4. Find First Non-Repeating Character

# Use a dictionary to count frequency, then find first unique char.

# Example:

# text = "aabbcde"

# 👉 Output: c

text = "aabbcde"
dict ={}
for item in text:
    dict[item] = dict.get(item,0)+1

for key,val in dict.items():
    if dict[key] == 1:
       print(key)
       break