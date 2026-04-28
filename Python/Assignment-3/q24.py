amt=int(input())
notes=[2000,500,200,100,50,20,10]
for n in notes:
    print(n,":",amt//n)
    amt%=n