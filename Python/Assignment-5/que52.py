# 12345
#  1__4
#   1_3
#    12
#     1
for i in range(1,6):
    for j in range(0,i-1):
        print(" ",end="")
    for k in range(1,7-i):
        if((k==1) or (k==6-i) or i==1):
            print(k,end="")
        else:
            print("_",end="")
    print()