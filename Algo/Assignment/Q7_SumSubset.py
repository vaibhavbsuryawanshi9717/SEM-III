def backtrack(res,nums,stack,pos):
    if pos==len(nums):
        res.append(list(stack))
    else:
        stack.append(nums[pos])
        backtrack(res,nums,stack,pos+1)
        stack.pop()
        backtrack(res,nums,stack,pos+1)

def subsets(nums):
    res=[]
    backtrack(res,nums,[],0)
    return res
  
def subsets2(self,nums):
    res=[[]]
    for num in sorted(nums):
        res+=[item+[num] for item in res]
    return res
 
test=[]
n=int(input("Enter the length of array: "))
for i in range(n):
    test.append(int(input("Enter the %dth elem: "%(i+1))))
print(test)
print(subsets(test))