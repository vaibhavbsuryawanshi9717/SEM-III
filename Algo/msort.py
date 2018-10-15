def combine(arr,l,m,r):
    n1=m
    n2=r
    j=r-1
    i=0
    while i<=n1 and j<=n2:
        if arr[i]>arr[j]:
            temp=arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            i+=1
        elif arr[i]<arr[j]:
            i+=1
        else:
            i=0
            j+=1

def msort(arr,l,r):
    if l<r:
        m=(l+r)//2
        msort(arr,l,m)
        msort(arr,m+1,r)
        combine(arr,l,m,r)
        

n=int(input())
arr=list(map(int,input().split()))
inp=input().
for i in range(n):


ln=int(len(arr))
msort(arr,0,ln-1)
print(arr)