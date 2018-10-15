def divide(arr,low,high):
    pivot=arr[high]
    i=(low-1)
    j=low
    while j<=high-1:
        if arr[j]<=pivot:
            i+=1
            tmp=arr[i]
            arr[i]=arr[j]
            arr[j]=tmp
        j+=1

    tmp=arr[i+1]
    arr[i+1]=arr[high]
    arr[high]=tmp 
    return (i+1)

def quickSort(arr,l,h):
    if l<h:
        pi=divide(arr,l,h) 
        quickSort(arr,l,pi-1)
        quickSort(arr,pi+1,h)
 
n=int(input("Enter the value of n:"))
arr=[]
for i in range(n):
    arr.append(int(input("Enter the %dth elem: "%(i+1))))

print("Unsorted Arr is :",arr)
quickSort(arr,0,n-1)
print("Sorted Arr is :",arr)