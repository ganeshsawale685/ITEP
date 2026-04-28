arr = [10, 20, 30, 40, 50]

pos = int(input("Enter position (index) to delete: "))


if pos > 0 and pos <= len(arr):
    for i in range(pos-1, len(arr)-1):
        arr[i] = arr[i + 1]
    else:
        arr.pop()   

    print("Updated list:", arr)