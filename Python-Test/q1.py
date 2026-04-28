lst  =[1,2,3,4,5]

st =0
end =len(lst)-1

print(f"Before Reverse {lst}")

while st < end:
    lst[st],lst[end] = lst[end],lst[st]

    st+=1
    end-=1


print(f"After Reverse {lst}")