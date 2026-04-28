# 3. WAP to program calaculate the sum of all even element and all odd element of array
list = [10,20,3,40,5]
sum =0

for element in list:
    if element % 2 == 0:
        sum+=element

print(f"Total Sum of Even list Element {list} = {sum}")