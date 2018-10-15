#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<unistd.h>
#include<sys/socket.h>
#include<netinet/in.h>
int main()
{
        int sockfd;
        char ch,fname[50];
        struct sockaddr_in server_address;
        sockfd=socket(AF_INET,SOCK_STREAM,0);
        server_address.sin_family=AF_INET;

         server_address.sin_port=htons(8080);
         connect(sockfd,(struct sockaddr *)&server_address,sizeof(server_address));
         do
         {
           printf("Enter The File Name:\n" );
           scanf("%s",fname);
           send(sockfd,fname,strlen(fname),0);
           scanf("%c",&ch);
         }
         while(ch!='y');
}
