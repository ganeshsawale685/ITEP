start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    for j in range(1,i):
        if(i%j==0):

            print("factors of ",i,"is",j)
        print()