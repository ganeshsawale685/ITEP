# 8. Group Words by Length

# Group a list of words into a dictionary where key = word length.

# Example:

# words = ["hi", "hello", "hey", "python","bye"]

# 👉 Output:

# {2: ['hi'], 3: ['hey',"bye"], 5: ['hello'], 6: ['python']}

words = ["hi", "hello", "hey", "python","bye"]

d ={}

for word in words:
    size_of_word = len(word)
    if size_of_word not in d:
        d[size_of_word] =[]
    d[size_of_word].append(word)

print(d)