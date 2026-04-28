#     A
#    AB
#   ABC
#  ABCD
# ABCDE

for i in range(5, 0, -1):
    for j in range(i-1):
        print(" ", end="")
    for k in range(6-i):
        print(chr(65+k), end="")
    print()