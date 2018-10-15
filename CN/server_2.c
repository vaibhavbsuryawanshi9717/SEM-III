#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include <dirent.h>
#include<sys/socket.h>
#include<unistd.h>
#include<netinet/in.h>

void showFile()
{
    struct dirent *de;   
    DIR *dr = opendir(".");
    if (dr == NULL)
    {
        printf("Error\n" );
    }
     while ((de = readdir(dr)) != NULL)
        {
            printf("\t%s\n", de->d_name);
        }
    closedir(dr);    
}

int main()
{
      int sockfd,accepted_conn,valread;
      char buff[1024];
      struct sockaddr_in server_address;
      int address_len=sizeof(server_address);
      sockfd=socket(AF_INET,SOCK_STREAM,0);
      server_address.sin_family=AF_INET;
      server_address.sin_addr.s_addr=INADDR_ANY;
      server_address.sin_port=htons(8080);
      bind(sockfd,(struct sockaddr *)&server_address,sizeof(server_address));
      listen(sockfd,3);
      accepted_conn=accept(sockfd,(struct sockaddr *)&server_address,(socklen_t*)&address_len);
      valread=read(accepted_conn,buff,1024);
      showFile();
      close(accepted_conn);
}
