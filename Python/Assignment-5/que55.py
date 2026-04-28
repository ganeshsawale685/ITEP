# ABCDE
#  ABCD
#  ABC
#   AB
#   A
for i in range(1,6):
    for j in range(0,i-1):
        print(" ",end="")
    for k in range(1,7-i):
        print(chr(k+64),end="")
    print()
