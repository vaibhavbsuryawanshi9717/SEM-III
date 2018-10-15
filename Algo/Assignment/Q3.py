def find_num(arr):
    arr=sorted(arr)
    fst=arr[0]
    lst=arr[len(arr)-1]
    i=fst
    j=0
    while i<lst:
        if i^arr[j]!=0:
            print(i)
            i+=1
        else:
            i+=1
            j+=1


arr=[4,1,2,5,8,7]
find_num(arr)