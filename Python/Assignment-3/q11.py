age = int(input("Enter age: "))
sex = input("Enter sex (M/F): ")
ms = input("Marital status (Y/N): ")

if sex.upper()=='F':
    print("Urban areas")
elif sex.upper()=='M':
    if 20<=age<=40:
        print("Anywhere")
    elif 40<age<=60:
        print("Urban areas")
    else:
        print("ERROR")