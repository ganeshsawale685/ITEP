# ABCDE
# A  D
# A C
# AB
# A
for i in range(5,0,-1):
    for j in range(1,6):
        if(i==j or i==5 or j==1):
            print(chr(j+64),end="")
        else:
            print(" ",end="")
    print()