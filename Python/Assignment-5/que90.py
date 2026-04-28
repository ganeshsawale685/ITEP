# *        *
#   *     *
#    *  *
#     *
#    *  *
#   *      *
# *         *
for i in range(1,9):
    for j in range(1,9):
        if(i==j or i+j==8):
            print("*",end=" ")
        else:
            print(" ",end="")
    print()