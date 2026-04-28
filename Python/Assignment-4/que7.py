num=int(input("enter a number"))
temp=0
for i in range(1,num):
    if(num%i==0):
        temp+=1
if(temp==1):
    print(num,"is a prime number")
else:
    print(num,"is not a prime number")

