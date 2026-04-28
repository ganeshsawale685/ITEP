cp = float(input("Enter cost price: "))
if cp>100000:
    tax=cp*0.15
elif cp>50000:
    tax=cp*0.10
else:
    tax=cp*0.05
print("Tax:",tax)