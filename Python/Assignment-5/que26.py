
# 1
# 10
# 1 1
# 1  0
# 10101


for i in range(1,6):
    for j in range(1,i+1):
        if((j==1)or(j==i)or i==5):
                if(j%2==0):
                   print(0,end="")
                else:
                     print(1,end="")
        else:
             print(" ",end="")
    print()