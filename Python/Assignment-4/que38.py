# num=int(input("enter a number"))
# temp=num
# sum=0
# count=0
# while num!=0:
#     num=num//10
#     count +=1

# sum=temp
# while num!=0:
    
#     rem=num%10    
#     sum=sum+rem**count
#     num=num//10

# if(sum==temp):
#     print(temp,"is an armstrong")  
# else:
#     print(temp,"is not armstrong")    





num=int(input("enter a number"))
temp=num
sum=0
count=len(str(num))
while num!=0:
    
    rem=num%10    
    sum=sum+rem**count
    num=num//10

if(sum==temp):
    print(temp,"is an armstrong")  
else:
    print(temp,"is not armstrong")    