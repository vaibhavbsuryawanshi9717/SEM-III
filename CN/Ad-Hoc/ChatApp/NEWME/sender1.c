#include <stdio.h>
#include <stdlib.h>
#include <sys/time.h>
#include <sys/socket.h>
#include <arpa/inet.h>
#include <sys/types.h>
#include <sys/uio.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <unistd.h>
#include <string.h>
#include <strings.h>

#define MAX 80
#define PORT 8080
typedef struct clientsocketData
{
    int conn_fd;
    struct sockaddr_in listener_addr;
}clientSocketData;


clientSocketData * clientSocket (char *ipaddr, int port)
{
    clientSocketData *sock;
    
    sock=(clientSocketData *) malloc (sizeof(clientSocketData));

    memset(&sock->listener_addr,'0',sizeof(sock->listener_addr));

    sock->conn_fd=socket(PF_INET,SOCK_DGRAM,0);
        if (sock->conn_fd == -1)
        {
            fprintf(stdout,"Unable To Initiate Client Socket");
            exit(1);
        }

    sock->listener_addr.sin_family = AF_INET;
    sock->listener_addr.sin_port = htons(port);
    sock->listener_addr.sin_addr.s_addr = inet_addr(ipaddr) ;
    printf("%s",ipaddr );
    return sock;
}


int main()
    {
        char buff[1023];
        char user[100];
        char destip[50];
        char finalip[50];
        char cpy[1000];
        char ack[10];
        int sockfd,len,n;
        clientSocketData *sock;
       FILE *ffp;
        
        //len=sizeof(s->servaddr);
        int port;
        int ch;
        onlineuser();
        int tuid,d;
        char Ihost[20];
        char tip[100];
        //ffp=fopen(".ips","r");
        int addrlen=sizeof(sock->listener_addr);
        //sock=clientSocket("192.168.43.*",65302);
        for(;;)
        {
           
	    //onlineuser();
            ffp=fopen(".ips","r");
            fprintf(stdout,"Enter userId and Message\n");
            scanf("%d",&ch);
           // int tuid,d;
            //char tip[100];
            while(fscanf(ffp,"%d %s",&tuid,tip)!=EOF)
            {

                printf("tuid=%d\n",tuid);
                if(tuid==ch)
                {
                    strcpy(destip,tip);
                    strtok(destip,"\n");
                    strcpy(finalip,destip);
                    sock=clientSocket(destip,65302);
		//printf("%s",destip);
                  //  printf("d=%d\n",d);
                   // printf("%s\n",destip);
            		d=1;
                    break;
                }
                else if(tuid!=ch)
                {
                  /*  strcpy(destip,tip);
                    strtok(destip,"\n");
                    strcpy(finalip,destip);
                    sock=clientSocket(destip,65302);
			    
                   printf( " i am in d=%d",d);*/   
                    d=0;
		         	//break;
                   
                }
		    else
		    {
			fprintf(stdout,"Try On Another Session\n");
		    }   
             memset(destip,'\0',sizeof(destip));
               // break;
            }
            n=0;    
            //while((buff[n++]=getchar())!='\n');
		//sock=clientSocket(destip,65302);
                            
	     memset(buff,'\0',5); 
            printf("\t");
           // printf("\n\Talk...:\t");
            fgets(buff,20,stdin);
            //strtok(buff,"\n");
            strcpy(cpy,buff);
            
            if(d==1)
            {
            printf("\tSending....\n");
            sendto(sock->conn_fd,buff,strlen(buff),0,(struct sockaddr *) &sock->listener_addr,sizeof(sock->listener_addr));
            memset(buff,'\0',sizeof(buff));

            }
            else if(d==0)
            {   
                   
                printf("Enter The Ip Of Host \n");
                fgets(destip,20,stdin);
                
                printf("Enter The InterMediate Host\n");
                fgets(Ihost,20,stdin);
                //strcpy(destip,tip);
                strtok(destip,"\n");
                strtok(Ihost,"\n");
                //strcpy(finalip,destip);
                sock=clientSocket(Ihost,65302);
                //printf("to ANOTHER USER1:%s",buff);
                    
                   
                   strcat(buff,"+");
                    strcat(buff,destip);
                    printf("final ip=%s",finalip);
                    strcat(buff,"@");
                    int r=strlen(buff);
                    //printf("chara %c",buff[r-1]);
                    sendto(sock->conn_fd,buff,strlen(buff),0,(struct sockaddr *) &sock->listener_addr,sizeof(sock->listener_addr));
                    recvfrom(sock->conn_fd,ack , 1024 , 0 , (struct sockaddr *) &sock->listener_addr , (socklen_t *) &addrlen );
                    if(strcmp(ack,"ok")==0)
                    {
                        printf("received: '%s' from client %s\n",ack,inet_ntoa(sock->listener_addr.sin_addr));
                    }
                    memset(buff,'\0',sizeof(cpy));

            }
        	else
		    {
		        fprintf(stdout,"No Such User Presnt Currently\n");	
	        }

                memset(tip,'\0',sizeof(tip));
                memset(buff,'\0',MAX);
                memset(finalip,'\0',sizeof(finalip));
                fclose(ffp);
                close(sock->conn_fd);
    }
    }
void onlineuser()
        {
	char userip[20];
	char ips[20];
    FILE *fp;
    FILE *ifp;
        char interface[200]="sudo arp-scan --interface wlo1 -l | grep 192.*.*.* | ";
            char pattern[40]="\"[0-9]+(.)[0-9]+(.)[0-9]+(.)[0-9]+\"";
            char ip[40]="grep -E -o ";
            strtok(interface,"\n");
            strtok(ip,"\n");
            strtok(pattern,"\n");
            strcat(interface,ip);
            //printf("%s",interface);
            strcat(interface,pattern);
            //printf("\n%s",interface);
            fp=popen(interface,"r");
            ifp=fopen(".ips","w+");
            int i=0;
            printf("LIVE Users...\n");
	while (fgets(ips,15, fp) != NULL)
            {
                
                fprintf(ifp,"%d %s",i,ips);
                printf("%d %s",i,ips);
                i++;
            }
    //fprintf(ifp,"1 2");
    fclose(fp);
    fclose(ifp);        	  
	}  
