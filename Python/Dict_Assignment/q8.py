
# 🔹 8. Frequency of Words in Sentence

# Count how many times each word appears.

# Example:

# sentence = "this is a test this is"

# 👉 Output:

# {'this': 2, 'is': 2, 'a': 1, 'test': 1}

sentence = "this is a test this is"


l = sentence.split()
lst = list(l)

result ={}

for item in lst:
    result[item] =result.get(item,0)+1

print(result)