#    *
#   *_* 
#  *___* 
# *_____*
#  *___* 
#   *_*
#    *
 
for i in  range(1,5):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        if  k==1 or k==2*i-1:
            print("*",end="")
        else:
            print("_",end="")
    print()
for i in range(3,0,-1):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        if(  k==1 or k==2*i-1):
            print("*",end="")
        else:
            print("_",end="")
    print()