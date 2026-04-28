start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    for j in range(1,11):
        table=j*i
        print(table,end=" ")
    print()