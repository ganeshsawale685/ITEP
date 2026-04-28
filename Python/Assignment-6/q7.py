# WAP to search an element in array using binary search.
list = [1,2,3,4,5,6,7,8,9]

target = 1

size = len(list)
start = 0
end  = size-1

while (start <= end):
    mid = int(start + (end-start)/2)
    
    if list[mid] == target:
        print(f"Target Match Found Value at index {mid}")
        break
    elif(list[mid] > target):
        end = mid-1

    else :
        start = mid+1
   
    
