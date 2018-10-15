#include<unistd.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<string.h>
#include<arpa/inet.h>
int main(){
	int sockfd, accepted_conn, valread;
	struct sockaddr_in server_address;

	sockfd = socket(AF_INET, SOCK_STREAM, 0);
	server_address.sin_family = AF_INET;
	server_address.sin_port = htons(8080);
	server_address.sin_addr.s_addr=inet_addr("192.168.1.102");
	connect(sockfd,(struct sockaddr *) &server_address, sizeof(server_address));
	send(sockfd, "Hello",strlen("Hello"), 0);
}
