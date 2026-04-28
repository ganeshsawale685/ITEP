salary = float(input("Enter salary: "))
years = int(input("Enter years of service: "))
if years > 5:
    bonus = salary * 0.05
else:
    bonus = 0
print("Bonus:", bonus)