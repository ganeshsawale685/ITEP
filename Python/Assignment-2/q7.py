# Write a JavaScript program using the conditional operator to check whether a given year is a leap year.


year = int(input("Enter a year: "))


result = "Leap Year" if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0) else "Not a Leap Year"

print(result)