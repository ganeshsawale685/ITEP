#  Find the intersection to two list

l1 =[1,4,6,7,8]
l2=[1,2,4,5,8,9,10]

n1=len(l1)
n2=len(l2)

i=j=0
result =[]

while i<n1 and j<n2:
    if l1[i] == l2[j]:
         if not result or result[-1] != l1[i]:
            result.append(l1[i])
            i+=1
            j+=1

    elif l1[i] < l2[j]:
        i+=1

    else:
        j+=1


print(f"Intersection : {result}")

