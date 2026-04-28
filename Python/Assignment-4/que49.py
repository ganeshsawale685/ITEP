start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    temp=i
    sum=0
    for j in range(1,i):
        
        if(i%j==0):
            sum=sum+j
    if(temp==sum):
        print(temp,"is a perfect number")
    else:
        print(temp,"is not a perfect number")
    print()  
