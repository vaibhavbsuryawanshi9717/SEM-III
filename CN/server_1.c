#include<stdio.h>
#include<string.h>
#include<stdlib.h>
#include<dirent.h>
#include<sys/socket.h>
#include<unistd.h>
#include<netinet/in.h>

int findFile(char fname[])
{
    struct dirent *de;   
    DIR *dr = opendir(".");
    if (dr == NULL)
    {
        printf("Could not open current directory" );
        return 0;
    }
     while ((de = readdir(dr)) != NULL)
		{
		if(strcmp(fname,de->d_name)==0)	
        {
            printf("%s is Present\n", de->d_name);
            break;
        }
        else
        {
            printf("%s is Not Present\n",de->d_name);
            break;
        }
        break;
		}
 
    closedir(dr);    
    return 0;
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
        while(1)
        {
            accepted_conn=accept(sockfd,(struct sockaddr *)&server_address,(socklen_t*)&address_len);
            char ch[]="y";
            do
            {
               valread=read(accepted_conn,buff,1024);
	       findFile(buff);
               if(strcmp(buff,ch)==0)
                  break;
               memset(buff, '\0', sizeof(buff));
            }
            while(1);
            break;
        }
        close(accepted_conn);
}
