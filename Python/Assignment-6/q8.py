# WAP to insert a element in array at specific position.

arr = [10, 20, 30, 40, 50]

position = int(input("Enter the position (index): "))

n = len(arr)
arr.append(None)
print(f"Before List {arr}")

if position > 0 and position <= len(arr):
    value = int(input("Enter the value: "))
    for i in range(n-1,position-2,-1):
        arr[i+1] = arr[i]
    else:
        arr[position-1]=value
    print(f"After inserting:{arr}")

else:
    print("Invalid Postion")