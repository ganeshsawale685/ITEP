#    A
#   ABC
#  ABCDE
#  ABCDEEF
# ABCDEFGHI
for i in range(1,6):
    for j in range(0,5-i):
        print(" ",end="")
    for k in range(1,2*i):
        print(chr(k+64),end="")
    print()