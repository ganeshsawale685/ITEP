# 10. find the second maximum and second minimum in the list

data =[12,3,5,6,8,9]

if len(data) == 2:
    print("No second Minimum & Maximum")

min1 = min2 = float('inf')
max1 = max2 = float('-inf')

for i in data:
    if i < min1:
        min2 =min1
        min1 =i

    elif min1 < i < min2:
        min2 = i

    if i>max1:
        max2 = max1
        max1=i
    elif max2 < i < max1:
        max2 =i


print(f"Maximum1 ={max1}, Maximum2 = {max2}")
print(f"Minimum2 ={min2}, Minimum2 = {min2}")