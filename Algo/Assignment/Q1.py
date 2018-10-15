import time
#i consider factorial program to how much time it will be taken
def recur(n):
		if n==1:
		     return n
		else:
		     return n*recur(n-1)

def itera(n):
    fact=1
    n=n+1
    for i in range(1,n):
        fact=fact*i
    return fact

no=int(input("Enter No. = "))
st1=time.clock()
print(itera(no))
print("Time taken by Iterative method is ",time.clock()-st1)

st2=time.clock()
print(recur(no))
print("Time taken by Recursive method is ",time.clock()-st2)
