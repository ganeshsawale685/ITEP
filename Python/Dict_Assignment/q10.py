
# 🔹 10. Nested Dictionary Sum

# Find total salary from nested dictionary.

# Example:

# employees = {
#     "emp1": {"salary": 5000},
#     "emp2": {"salary": 7000}
# }

# 👉 Output: 12000


employees = {
    "emp1": {"salary": 5000},
    "emp2": {"salary": 7000}
}
totalSalary=0
for key,values in employees.items():
    for k,n in values.items():
        totalSalary+=n

print(totalSalary)