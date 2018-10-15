#include<stdio.h>
int max(int a, int b)
{
 return (a > b)? a : b;
}
 
int knapSack(int W, int wt[], int prof[],int n) 
{ 
   int i, w; 
   int K[n+1][W+1]; 
   for (i = 0; i <= n; i++) 
   { 
       for (w = 0; w <= W; w++) 
       { 
           if (i==0 || w==0) 
               K[i][w] = 0; 
           else if (wt[i-1] <= w) 
                 K[i][w] = max(prof[i-1] + K[i-1][w-wt[i-1]],  K[i-1][w]); 
           else
                 K[i][w] = K[i-1][w]; 
       } 
   } 
   return K[n][W]; 
} 
  
int main() 
{ 
    int prof[10],wt[10],W,n;
    printf("Enter the value of n: ");
    scanf("%d",&n);
    for(int i=0;i<n;i++)
    {
	printf("Enter the profit and weight: ");
	scanf("%d %d",&prof[i],&wt[i]);
    } 
    printf("Enter the bag size: ");
    scanf("%d",&W);
    printf("%d",knapSack(W,wt,prof,n));
}
