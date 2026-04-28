q = int(input("Enter quantity: "))
cost = q * 100
if cost > 1000:
    cost *= 0.9
print("Total cost:", cost)