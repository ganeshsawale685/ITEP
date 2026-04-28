ran=int(input("enter the range"))
upper = ord('A')
lower = ord('b')

for i in range(1,ran):   
    if i%2!= 0:
        print(chr(upper),end=" ")
        upper+= 2
    else:
        print(chr(lower),end=" ")
        lower+=2