lst =[1,2,3,4,5,6,7,8,9,89,66,78]

# fruits = ['Mango', 'Banana', 'Apple']
# prices = [200, 60, 180]

# result = list(zip(fruits, prices))
# print(result)


# result = [x*x for x in lst if x%2 == 1]
result = ["ODD" if x%2 else "EVEN" for x in lst]
print(result)
# elem = 50
# lst1 = [x for x in lst if x>elem]
# lst2 = [x for x in lst if x<elem]

# print(lst1)
# print(lst2)