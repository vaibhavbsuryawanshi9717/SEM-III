#include<stdio.h>
#include<unistd.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<string.h>
#include<arpa/inet.h>

int main(){
	int sockfd, accepted_conn, valread;
	char buffer[1024];
	struct sockaddr_in server_address;
	int address_len = sizeof(server_address);
	sockfd = socket(AF_INET, SOCK_STREAM,0);
	printf("%d",sockfd);
	server_address.sin_family = AF_INET;
	server_address.sin_addr.s_addr = INADDR_ANY;
//	server_address.sin_addr.s_addr = inet_addr("192.168.1.102");
	server_address.sin_port = htons(8080);

	bind(sockfd,(struct sockaddr *) &server_address, sizeof(server_address));

	listen(sockfd, 3);

	while(1){
		accepted_conn = accept(sockfd,(struct sockaddr *) &server_address,(socklen_t *) &address_len);
		valread = read(accepted_conn,buffer,1024);
		printf("%s\n", buffer);
		close(accepted_conn);
	}
}
