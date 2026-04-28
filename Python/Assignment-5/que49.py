#     1
#    10
#   101
#  1010
# 10101
for i in range(1,6):
    for j in range(1,5-i):
        print(" ",end="")
    for k in range(1,i+1):
        if((i+k)%2==0 ):
            print(1,end="")
        else:
            print(0,end="")
    print()     