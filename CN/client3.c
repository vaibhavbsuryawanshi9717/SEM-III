#include<sys/socket.h>
#include<unistd.h>
#include<netinet/in.h>
#include<stdio.h>
#include<string.h>
#include<stdlib.h>
int main()
{
	int i=0,sockfd,conn;
	char buffer[100];
	struct sockaddr_in server_address;
	sockfd=socket(AF_INET,SOCK_STREAM,0);
	server_address.sin_family=AF_INET;
	server_address.sin_port=htons(8080);
	conn=connect(sockfd,(struct sockaddr *)&server_address,sizeof(server_address));
//	if(!conn)
//	{	
        while(1)
        {
		printf("\n Connection Established ...");
		printf("\nUser1\t\t\t");
		//scanf("%s",buffer);
		fgets(buffer, sizeof(buffer), stdin);
        printf("Message%d %s",i,buffer);
        //fgets(buffer,100,0);
        send(sockfd,buffer,100,0);
		recv(sockfd,buffer,100,0);
		printf("\n%s\t\t",buffer);
        i++;
        memset( buffer, '\0',sizeof(buffer));
        }
/*	}
	else
	{
		printf("\n Connection failed..");
	}
*/}
