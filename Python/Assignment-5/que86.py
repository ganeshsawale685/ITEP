# ***** *****
# ****  ****
# ***    ***
# **      **
# *        *
for i in range(5,0,-1):
    for j in range(1,i+1):
        print("*",end="")
    
    for s in range(5-i):
        print(" ",end="")
    for k in range(1,i+1):
         print("*",end="")
    print()