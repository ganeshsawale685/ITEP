# 55555
# 4  4
# 3 3
# 22
# 1


for i in range(5,0,-1):
    for j in range(1,i+1):
        if(j==1 or i==j or i==5):
            print(i,end="")
        else:
            print(" ",end="")
    print()