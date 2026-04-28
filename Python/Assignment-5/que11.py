
# A
# AB
# ABC
# ABCD
# ABCDE

for i in range(ord('A'),ord('E')+1):
    for j in range(ord('A'),i+1):
        print(chr(j),end='')
    print()