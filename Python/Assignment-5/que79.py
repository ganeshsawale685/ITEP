# 1
# 1 2
# 1  3
# 1   4
# 1  3
# 1 2
# 1
for i in range(1,5):
    for j in range(1,i+1):
        if(i==j or j==1):
              print(j,end=" ")
        else:
             print(" ",end="")
    print()
for i in range(3,0,-1):
    for j in range(1,4):
        if i==j or j==1:
             print(j,end=" ")
        else:
             print(" ",end="")

              
         
    print()