
# Write a program using the conditional operator to assign grades based on marks:

# ≥ 90 → A

# ≥ 75 → B

# ≥ 60 → C

# < 60 → Fail



marks = int(input("Enter marks: "))

grade = "A" if (marks >= 90 )else  "B" if (marks >= 75) else "C" if (marks >= 60) else "Fail"

print("Grade:", grade)