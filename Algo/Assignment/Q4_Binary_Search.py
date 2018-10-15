def binarySearch(sortArr,n,selem):
  st=0
  ed=n-1
  
  while st<=ed:
    mid=(st+ed)//2
    if selem==sortArr[mid]:
      return mid
    elif selem<sortArr[mid]:
      ed=mid-1
    else:
      st=mid+1
  return -1


n=int(input("Enter the value of n:"))
sortArr=[]

for i in range(n):
  sortArr.append(int(input("Enter %dth element: "%(i+1))))

selem=int(input("Enter the number to search: "))
pos=binarySearch(sortArr,n,selem)
if(pos!=-1):
  print("Given number %d is present at position %d"%(selem,pos))
else:
  print("Entered number %d is not present in the arr"%selem)


