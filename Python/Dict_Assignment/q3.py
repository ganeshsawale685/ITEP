# 🔹 3. Group Words by Length

# Group a list of words into a dictionary where key = word length.

# Example:

# words = ["hi", "hello", "hey", "python"]

# 👉 Output:

# {2: ['hi'], 3: ['hey'], 5: ['hello'], 6: ['python']}

words = ["hi", "hello", "hey", "python"]
result = {}


for i in range(len(words)):
    size = len(words[i])
    result[size] =[ words[i]]

print(result)