#  *
#  ***
#  ***** 
# ******* 
#  ***** 
#   *** 
#    *

for i in range(1,5):
    for k in range(5-i):
        print(" ",end="")
    for j in range(1,2*i):
        print("*",end="")
    print()

for i in range(3,0,-1):
    for k in range(5-i):
        print(" ",end="")
    for j in range(1,2*i):
        print("*",end="")
    print()