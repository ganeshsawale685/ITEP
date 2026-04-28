#     A
#    AB
#   A_C
#  A__D
# ABCDE
for i in range(1,6):
    for j in range(1,5-i):
        print(" ",end="")
    for k in range(1,i+1):
        if(k==1 or i==5 or i==k):
            print(chr(k+64),end="")
        else:
            print("_",end="")
    print()     