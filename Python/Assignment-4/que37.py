num=int(input("enter a number"))
num1=num
temp=0
while num!=0:
    rem=num%10
    temp=temp*10+rem
    num=num//10
if(num1==temp):
    print(num1,"is a palindrome number")
else:
    print(num1,"is not a palidrome number")  