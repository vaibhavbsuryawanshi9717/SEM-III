def heapify(arr,n,i):
    largest = i
    l=2*i+1
    r=2*i+2
    if l<n and arr[l]>arr[largest]:
        largest=l
    if r<n and arr[r]>arr[largest]:
        largest=r
    if largest!=i:
        temp=arr[i]
        arr[i]=arr[largest]
        arr[largest]=temp
        heapify(arr,n,largest)

def heapSort(arr,n):
    i=n//2-1
    while i>=0:
        heapify(arr,n,i)
        i-=1

    i=n-1
    while i>=0:
        tmp=arr[0]
        arr[0]=arr[i]
        arr[i]=tmp
        heapify(arr,i,0)
        i-=1

n=int(input("Enter the value of n:"))
arr=[]
for i in range(n):
    arr.append(int(input("Enter the %dth elem: "%(i+1))))

print("Unsorted Arr is :",arr)
heapSort(arr,n)
print("Sorted Arr is :",arr)
