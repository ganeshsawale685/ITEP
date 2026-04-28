# a
# bc
# def
# ghij
# klmno

num=ord('a')
for i in range(1,6):
    for j in range(1,i+1):
        print(chr(num),end='')
        num+=1
    print()