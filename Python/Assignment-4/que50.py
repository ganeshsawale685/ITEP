start=int(input("enter starting number"))
end=int(input("enter the end number"))
for i in range(start,end):
    num1=i
    temp=0
    while i!=0:
        rem=i%10
        temp=temp*10+rem
        i=i//10
    if(num1==temp):
        print(num1,"is a palindrome number")
    else:
        print(num1,"is not a palidrome number")  
    print()