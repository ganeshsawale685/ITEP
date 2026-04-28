#Write a JavaScript program using nested ternary operators to find the maximum of three numbers.

first_num = int(input("Enter first Number "))
second_num = int(input("Enter Second Number "))
third_num = int(input("Enter Third Number "))

print("Greater Number is First",first_num) if(first_num > second_num > third_num) else print("Greater Second Number",second_num) if(second_num > third_num) else print("Greater third Nummber",third_num)
