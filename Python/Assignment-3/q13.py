n = int(input("Enter number (1-7): "))
days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
if 1<=n<=7:
    print(days[n-1])