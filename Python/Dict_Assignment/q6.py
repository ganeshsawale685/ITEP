# 🔹 6. Sort Dictionary by Value

# Sort dictionary in ascending order of values.

# Example:

# data = {"a": 3, "b": 1, "c": 2}

# 👉 Output:

# {'b': 1, 'c': 2, 'a': 3}

data = {"a": 3, "b": 1, "c": 2}

lst = list(data.items())

for i in range(len(lst)):
    for j in range(i+1,len(lst)):
        if lst[i][1] > lst[j][1]:
            lst[i],lst[j] = lst[j],lst[i]

print(lst)