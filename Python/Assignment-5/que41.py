# A
# BCD
# EFGHI
# JKLMNOP
num=ord('A')
for i in range(1,5):
    for j in range(1,2*i):
        print(chr(num),end="")
        num+=1
    print()
