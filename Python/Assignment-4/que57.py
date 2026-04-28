start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    temp=0
    for j in range(1,i):
        if(i%j==0):
            temp+=1

    if(temp==1):
        print(i,"is a prime number")