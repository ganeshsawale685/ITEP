

#Write a program using the conditional operator to check whether a student passes or fails, assuming pass marks are 40.
marks = int(input("Enter marks: "))

# Conditional operator
result = "Pass" if marks >= 40 else "Fail"

print("Result:", result)