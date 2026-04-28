marks=[int(input()) for _ in range(5)]
p=sum(marks)/5
if p>=90: print("A")
elif p>=80: print("B")
elif p>=70: print("C")
elif p>=60: print("D")
elif p>=40: print("E")
else: print("F")