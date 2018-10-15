def inserSort(arr):
	for i in range(1,len(arr)):
		key=arr[i]
		j=i-1
		while(j>=0 and arr[j]>key):
			arr[j+1]=arr[j]
			j=j-1
			arr[j+1]=key
	return arr	

arr=[]
n=int(input("Enter the value of n:"))
for i in range(n):
	arr.append(int(input("Enter the %dth elem :"%(i+1))))

print("Unsorted Arr is :",arr)
sarr=inserSort(arr)
print("Sorted Arr is :",sarr)
