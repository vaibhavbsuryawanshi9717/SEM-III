#include<stdio.h>
FILE *fp;

int main()
{
    int uid,suid,prev;
    char buff[100];
    fp=fopen(".ips","r");
    while(1)
    {
        fscanf(fp,"%d%s",&uid,buff);
        printf("\nEnter the userID:");
            scanf("%d",&suid);
        while(!feof(fp))
        {
            if(suid==uid)
            {
                    prev=suid;
                    printf("\n%d\t%s",uid,buff);
                    printf("\nEnter the userID:");
                    scanf("%d",&suid);
                    if(prev>suid)
                        fseek(fp,0,SEEK_SET);
            }
            else
                fscanf(fp,"%d%s",&uid,buff);
        }
        printf("The %d is not a valid user...",suid);
        fseek(fp,0,SEEK_SET);
    }
}
