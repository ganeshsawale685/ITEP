# *****
# ####
# ***
# ##
# *
for i in  range(5,0,-1):
    for j in range(1,i+1):
        if(i%2):
            print("*",end="")
        else:
            print("#",end="")
    print()