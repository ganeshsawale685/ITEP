# Find occurance of an integer number in array.
lst =[1,2,3,4,5,3,5,5]
integer=5
counter=0

for element in lst:
    if integer == element:
        counter+=1

print(f"Element found {counter} times" if counter else "Element not found")