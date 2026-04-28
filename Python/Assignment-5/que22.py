# A
# AB
# A C
# A  D
# ABCDE


for i in range (ord('A'),ord('E')+1):
    for j in range(ord('A'),i+1):
        if((j == ord('A'))or(j==i)or i==ord('E')):
            print(chr(j),end="")
        else:
            print(" ",end="")
    print()