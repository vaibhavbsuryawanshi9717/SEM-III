n=input("enter the limit")
ar=[]
arr=[]
for i in range(0,n):
	q1=raw_input("enter the job number::")
	p=input("enter the profit::")
	q=input("enter the deadline::")
	ar.append([q1,p,q])

print ar
p=sorted(ar,key= lambda val: (val[1]),reverse=True)
#print p
for i in range(0,len(ar)):
        for j in range(0,len(ar)):
	    arr.append(ar[i][2])
po=max(arr)
ip=[]
#print "max",po
for i in range(0,po):
	 ip.append(p[i])
#print ip
ip.sort(key= lambda x: x[2])

#print ip
su=0
for i in range(0,len(ip)):

        for j in range(0,1):
                gt=ip[i][1]
                su=su+gt

print "sum of profit of:",su
print ("job seq is:"),
for i in range(0,len(ip)):

        for j in range(0,1):
                print(ip[i][0]),
              






