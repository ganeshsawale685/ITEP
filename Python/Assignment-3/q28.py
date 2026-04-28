u=int(input())
if u<=50: bill=u*0.5
elif u<=150: bill=50*0.5+(u-50)*0.75
elif u<=250: bill=50*0.5+100*0.75+(u-150)*1.2
else: bill=50*0.5+100*0.75+100*1.2+(u-250)*1.5
bill*=1.2
print("Bill:",bill)