# 123456
# 54321
# 1234
# 321
# 12
# 1
for i in range(6,0,-1):
    if(i%2!=0):
        for j in range(i,i-1,-1):
            print(j,end="")
    else:
        for j in range(1,i+1):
            print(j,end="")
    print()