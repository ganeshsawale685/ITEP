# 1
# 1*1
# 1***1
# 1*****1
# 111111111
for i in range(1,6):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i-1):
        if k==1 or k==2*i-1 or i==5 :
            print(1,end="")
        else:
    
            print("*",end='')
    print()