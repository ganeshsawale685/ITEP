# A
# BB
# CCC
# DDDD
# EEEEE


for i in range(ord('A'),ord('E')+1):
    for j in range(ord('A'),i+1):
        print(chr(i),end='')
    print()