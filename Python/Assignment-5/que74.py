# 123456789
# 1     7
#  1   5
#   1 3
#    1
for i in range(5,0,-1):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        if(i==5 or k==2*i-1 or k==1):
            print(k,end="")
        else:
            print(" ",end="")
    print()