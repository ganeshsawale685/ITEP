# 🔹 1. Find Duplicate Values

# Given a dictionary, find keys that have the same values.

# Example:

data = {"a": 1, "b": 2, "c": 1, "d": 3}

result = list(data.items())

for i in range(len(result)):
   for j in range(i+1,len(result)):
      if result[i][1] == result[j][1]:
         print({result[i],result[j]})
