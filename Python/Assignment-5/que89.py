#     1               
#    101            
#   10101         
#   1010101           
#  101010101   
# 10101010101
for i in range(1,7):
    for k in range(5-i):
        print(" ",end="")
    for j in range(1,2*i):
        if(j%2!=0):
            print(1,end="")
        else:
            print(0,end="")
    print()