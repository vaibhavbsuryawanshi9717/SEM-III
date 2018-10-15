#include<stdio.h>
#include<stdlib.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<string.h>

int main()
{
    int socketid,check;
    struct sockaddr_in s_addr;
    socketid=socket(AF_INET,SOCK_STREAM,0);
    if(socketid!=-1)
    {
        s_addr.sin_family=AF_INET;
        s_addr.sin_addr.s_addr=INADDR_ANY;
        s_addr.sin_port=htons(8080);
        check=connect(socketid,(struct sockaddr *)&s_addr,sizeof(s_addr));
        printf("%d",check);
    }
    return 0;
}
