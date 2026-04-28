bs=float(input())
if bs<=10000:
    hra=0.2*bs; da=0.8*bs
elif bs<=20000:
    hra=0.25*bs; da=0.9*bs
else:
    hra=0.3*bs; da=0.95*bs
print("Gross:",bs+hra+da)