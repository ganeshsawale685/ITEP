# EEEEE
# DDDD
# CCC
# BB
# A


for i in range(ord('E'),ord('A')-1,-1):
    for j in range(ord('A'),i+1):
        print(chr(i),end="")
    print()