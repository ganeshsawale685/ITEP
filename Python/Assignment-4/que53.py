start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    num1=i
    sum=0

    while i!=0:
        rem=i%10
        fact=1
        while rem!=0:
            fact=fact*rem
            rem=rem-1
        sum=sum+fact
        i=i//10
    if(sum==num1):
        print(num1,"is  strong")  
    else:
        print(num1,"is not strong")    
