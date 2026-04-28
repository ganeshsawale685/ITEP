# 🔹 9. Find Common Keys in Two Dictionaries

# Return keys present in both.

# Example:

# d1 = {"a": 1, "b": 2}
# d2 = {"b": 3, "c": 4}

# 👉 Output: ['b']

d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}

for key1,value in d1.items():
    for key2,value in d2.items():
        if key1 == key2:
            print(key1)
