held = int(input("Classes held: "))
att = int(input("Classes attended: "))
per = (att/held)*100
print("Percentage:", per)
if per >= 75:
    print("Allowed")
else:
    print("Not Allowed")