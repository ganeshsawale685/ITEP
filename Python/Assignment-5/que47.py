#     1
#    11
#   1*1
#  1**1
# 11111
for i in range(1,6):
    for j in range(1,5-i):
        print(" ",end="")
    for k in range(1,i+1):
        if(k==1 or i==5 or i==k):
            print(1,end="")
        else:
            print("*",end="")
    print()       
