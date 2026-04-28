# 123456789
# 1234567
# 12345
# 123
# 1
for i in range(5,0,-1):
    for j in range(5-i):
        print(" ",end="")
    for k in range(1,2*i):
        print(k,end="")
    print()