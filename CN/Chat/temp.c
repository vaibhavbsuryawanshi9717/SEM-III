#include<stdio.h>
#include<netinet/in.h>
#include<sys/socket.h>
#include<string.h>
#include<unistd.h>
int main()
{
    int socketid,bval;
    char buffer[1024];
    struct sockaddr_in skt;
    int len=sizeof(struct sockaddr);
    socketid=socket(AF_INET,SOCK_STREAM,0);
    skt.sin_family=AF_INET;
    skt.sin_addr.s_addr=INADDR_ANY;
    skt.sin_port=htons(8080);
    bval=bind(socketid,(struct sockaddr *)&skt,len);
    listen(socketid,3);
    connect(socketid,(struct sockaddr *)&skt,len);
    int acc_con=accept(socketid,(struct sockaddr *)&skt,(socklen_t *)&len);
/*    printf("%d",acc_con);   */
    send(socketid, "Hello",strlen("Hello"), 0);
    read(acc_con,buffer,1024);//unistd
    printf("%s",buffer);
}