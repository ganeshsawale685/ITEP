# Q.3 Write a program to reverse the array.

lst = [10,20,30,40,50]

i=0
j=len(lst)-1

while i<j:
    lst[i],lst[j]=lst[j],lst[i]
    i = i+1
    j=j-1

print(lst)