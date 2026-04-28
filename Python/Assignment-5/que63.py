#     X 
#    X X
#   X__X
#  X____X
# X X X X X
for i in range(1,6):
    for j in range(5-i):
        print(" ",end="")
    for j in range(1,i+1):
        if j==1 or j==i or i==5 :
            print("X",end=" ")
        else:
    
            print("_",end=' ')
    print()