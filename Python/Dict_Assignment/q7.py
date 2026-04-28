# 🔹 7. Check Anagram Using Dictionary

# Check if two strings are anagrams using character count.

# Example:

# s1 = "listen"
# s2 = "silent"

# 👉 Output: True

s1 = "listen"
s2 = "silent"

d1 ={}
d2 ={}

if len(s1) != len(s2):
    print("Not anagram")

for item in range(len(s1)):
    d1[s1[item]] = d1.get(item,0)+1

for item in range(len(s2)):
    d2[s2[item]] = d2.get(item,0)+1


print(d1 == d2)
