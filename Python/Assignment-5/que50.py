# 12345
#  1234
#   123
#    12
#     1
for i in range(1,6):
    for j in range(0,i-1):
        print(" ",end="")
    for k in range(1,7-i):
        print(k,end="")
    print()
