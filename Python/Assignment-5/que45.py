#     5
#    44
#   333
#  2222
# 11111
for i in range(5, 0, -1):
    for j in range(i-1):
        print(" ", end="")
    for k in range(6-i):
        print(i, end="")
    print()