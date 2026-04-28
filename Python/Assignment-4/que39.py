num=int(input("enter a number"))
num1=num
sum=0

while num!=0:
    rem=num%10
    fact=1
    while rem!=0:
        fact=fact*rem
        rem=rem-1
    sum=sum+fact
    num=num//10
if(sum==num1):
    print(num1,"is  strong")  
else:
    print(num1,"is not strong")    
