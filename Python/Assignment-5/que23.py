# a
# bc
# d f
# g  j
# klmno



num=ord('a')
for i in range(1,6):
    for j in range(1,i+1):
        if((j==1)or(j==i)or i==5):
            print(chr(num),end="")
            num+=1
        else:
            print(" ",end="")
    print()