held = int(input("Classes held: "))
att = int(input("Classes attended: "))
medical = input("Medical cause (Y/N): ")
per = (att/held)*100
if per >= 75 or medical.upper()=='Y':
    print("Allowed")
else:
    print("Not Allowed")