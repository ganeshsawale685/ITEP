start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    temp=i
    sum=0
    count=len(str(i))
    while i!=0:
    
        rem=i%10    
        sum=sum+rem**count
        i=i//10

    if(sum==temp):
        print(temp,"is an armstrong")  
    else:
        print(temp,"is not armstrong")    