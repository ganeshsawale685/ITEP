# 11111
#  2222
#   333
#    44
#     5
for i in range(1,6):
    for j in range(0,i-1):
        print(" ",end="")
    for k in range(1,7-i):
        print(i,end="")
    print()
