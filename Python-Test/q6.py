#  program to insert an element at specifi index

lst = [10, 20, 30, 40, 50]

position = int(input("Enter the position (index): "))

n = len(lst)
lst.append(None)
print(f"Before List {lst}")

if position > 0 and position <= len(lst):
    value = int(input("Enter the value: "))
    for i in range(n-1,position-2,-1):
        lst[i+1] = lst[i]
    else:
        lst[position-1]=value
    print(f"After inserting:{lst}")

else:
    print("Invalid Postion")