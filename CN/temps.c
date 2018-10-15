#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<sys/socket.h>
#include<netinet/in.h>

int main()
{
    int socketid,chk,acc_conn,size;
    struct sockaddr_in s_addr;
    size=sizeof(s_addr);
    socketid=socket(AF_INET,SOCK_STREAM,0);
    if(socketid!=-1)
    {
        printf("Hiiii");
        s_addr.sin_family=AF_INET;
        s_addr.sin_addr.s_addr=INADDR_ANY;
        s_addr.sin_port=htons(8080);
        chk=bind(socketid,(struct sockaddr *)&s_addr,size);
        listen(socketid,3);
        acc_conn=accept(socketid,(struct sockaddr *)&s_addr,(socklen_t*)&size);
    }
    return 0;
}
