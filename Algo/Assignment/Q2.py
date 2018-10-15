def joseph(n,i):
	if n==1:
		return 1
	else:
		return (joseph(n-1,i)+i-1)%n+1

n=int(input("Enter the number of state = "))
i=int(input("Enter the interval = "))
result=joseph(n,i)
print("Safe State is : %d"%result)