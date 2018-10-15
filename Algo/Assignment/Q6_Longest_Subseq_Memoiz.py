def lcs(fstS,sndS):
    #Return resS where resS[i][j] contains length of LCS of fstS[i:] and sndS[j:]
    resS=[[-1]*(len(sndS)+1) for _ in range(len(fstS)+1)]
    lcs_helper(fstS,sndS,resS,0,0)
    return resS
 
def lcs_helper(fstS,sndS,resS,i,j):
    """Return length of LCS of fstS[i:] and sndS[j:] and fill in table resS.
    resS[i][j] contains the length of LCS of fstS[i:] and sndS[j:].
    This function fills in resS as smaller subproblems for solving resS[i][j] are
    solved."""
    if resS[i][j]>=0:
        return resS[i][j]
 
    if i==len(fstS) or j==len(sndS):
        q=0
    else:
        if fstS[i]==sndS[j]:
            q=1+lcs_helper(fstS,sndS,resS,i+1,j+1)
        else:
            q=max(lcs_helper(fstS,sndS,resS,i+1,j),lcs_helper(fstS,sndS,resS,i,j+1))
    resS[i][j] = q
    return q
 
def print_lcs(fstS,sndS,resS):
    """Print one LCS of fstS and sndS using table resS."""
    i=j=0
    while not (i==len(fstS) or j==len(sndS)):
        if fstS[i]==sndS[j]:
            print(fstS[i],end='')
            i+=1
            j+=1
        elif resS[i][j+1]>resS[i+1][j]:
            j+=1
        else:
            i+=1

fstS=input("Enter first string: ")
sndS=input("Enter second string: ")
resS=lcs(fstS,sndS)

print('Longest Common Subsequence: ', end='')
print_lcs(fstS,sndS,resS)