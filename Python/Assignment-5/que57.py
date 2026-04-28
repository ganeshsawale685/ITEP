#     *
#    * *
#   * * *
#  * * * *
# * * * * *
for i in range(1,6):
    for j in range(0,5-i):
        print(" ",end="")
    for j in range(1,2*i):
        print("*",end="")
    print()