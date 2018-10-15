#include<stdio.h>
int josephus(int p,int w);

int main()
{
	 int p,q;
	 printf("Enter the number of state");
	 scanf("%d",&p);
	 printf("\n Enter the interval ::");
	 scanf("%d",&q);
	 int d=josephus(p,q);
	 printf("\n Safe State is ::%d ",d);
	 return 0;
 }

int josephus(int p, int w)
{   
     if(p==1)
	     return 1;
     else 
    {    
	      return (josephus(p - 1, w) + w-1) % p + 1; 

	 }
 }

/*Explanation :
j(p,w)|	(j((p-1),w)+(w-1)))%p+1  example ::p=4 and w=2									p=number of state
w=skip interval
j(4,2)| (j((4-1),2)+(2-1)))%4+1=(j(3,2)+(2-1)))%4+1=1
      | (j((3-1),2)+(2-1)))%3+1=(j(2,2)+(2-1)))%3+1=3
     | 	(j((2-1),2)+(2-1)))%2+1=(j(1,2)+(2-1)))%2+1=1
    |	(j((1,2)+(2-1)))%4+1=1  (// f(1,n)=1, always)
*/	
