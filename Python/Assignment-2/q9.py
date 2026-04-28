
# Write a pythonprogram using the conditional operator to compare two arithmetic expressions and display the greater result

exp1 = eval(input("Enter first expression: "))
exp2 = eval(input("Enter second expression: "))

# Using conditional operator
greater = exp1 if exp1 > exp2 else exp2

print("Greater value:", greater)