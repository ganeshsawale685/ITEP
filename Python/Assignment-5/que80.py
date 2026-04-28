#    *
#   *_*
#  *_*_*
# *_*_*_*
#  *_*_*
#   *_*
#    *  
for i in  range(1,5):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        if(k%2!=0):
            print("*",end="")
        else:
            print("_",end="")
    print()
for i in range(3,0,-1):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        if(k%2!=0):
            print("*",end="")
        else:
            print("_",end="")
    print()