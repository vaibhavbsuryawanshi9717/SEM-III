#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<unistd.h>
#include<sys/socket.h>
#include<netinet/in.h>
int main()
    {
        int sockfd;
        char buff[1024];
        struct sockaddr_in server_address;
        int address_len=sizeof(server_address);
        sockfd=socket(AF_INET,SOCK_STREAM,0);
        server_address.sin_family=AF_INET;

         server_address.sin_port=htons(8080);
         connect(sockfd,(struct sockaddr *)&server_address,sizeof(server_address));
        
        send(sockfd,0,0,0);
        
    }

