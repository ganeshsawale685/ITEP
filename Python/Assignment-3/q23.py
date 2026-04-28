n=int(input())
days=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
print(days[n-1] if 1<=n<=7 else "Invalid")