def sumSet(arr,ssum,i):
    if ssum>30:
        return
    for j in range(len(arr)):
        sumSet(arr,ssum,i)



sumSet([5,10,12,13,15,18],0,0)