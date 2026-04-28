num=int(input("enter a number"))
temp=num
sum=0

for i in range(1,num):
    if(num%i==0):
        sum=sum+i
if(temp==sum):
    print(temp,"is a perfect number")
else:
    print(temp,"is not a perfect number")
        
