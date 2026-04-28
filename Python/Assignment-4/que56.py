start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    temp=i
    fact=1
    for i in range(1,i+1):
        fact=fact*i
        i=i-1
    print("factorial of",temp,"is",fact)