num=int(input("enter a number"))
even_count=0
odd_count=0
while num!=0:
    rem=num%10
    if(rem%2==0):
        even_count+=1
    else:
        odd_count+=1
    num=num//10

print("even count is",even_count)
print("odd count is",odd_count)