#include<sys/socket.h>
#include<stdio.h>
#include<unistd.h>
#include<netinet/in.h>
int main()
{
	int sockfd ,accepted_conn,valread,rvalue;
	char buffer[1024];
	FILE *f=NULL;
	struct sockaddr_in server_address;
	int address_len=sizeof(server_address),i=0,j;
	sockfd=socket(AF_INET,SOCK_STREAM,0);
	server_address.sin_family=AF_INET;
	server_address.sin_addr.s_addr=INADDR_ANY;
	server_address.sin_port=htons(8080);
	rvalue=bind(sockfd,(struct sockaddr *)&server_address,sizeof(server_address));
	listen(sockfd,3);
    char wr[1024];
	if(!rvalue)
	{
	
        printf("\nName binded to socket..");
		accepted_conn=accept(sockfd,(struct sockaddr *)&server_address,(socklen_t *)&address_len);
		while(1)
        {
        //printf("\nconn=%d",accepted_conn);
        //printf("\n New client connected..");
		recv(accepted_conn,buffer,100,0);
        //f=fopen(buffer,"r");
		//if(f!=NULL)
        printf("%s\t\t",buffer);
        printf("\nUser2...\t");
        //scanf("%s",wr);
        fgets(wr, sizeof(wr), stdin);
        printf("Message%d\t %s",i,wr);   
		send(accepted_conn,wr,100,0);
        i++;
		//write(accepted_conn,"\nNo\n",10);
		//close(accepted_conn);
		//sleep(1);
        memset( buffer, '\0', 1024);
        memset( wr, '\0', 1024);
	}
    }
	else{
	printf("\nConnection Failed");
	}
    close(accepted_conn);
}
