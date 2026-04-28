# A B C D E
# A B C D
# A B C
# A B
# A
for i in range(5,0,-1):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,i+1):
        print(chr(k+64),end=" ")
    print()