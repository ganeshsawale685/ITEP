start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    num1=i
    temp=0
    while i!=0:
        rem=i%10
        temp=temp*10+rem
        i=i//10
    print("reverse of",num1,"is",temp)