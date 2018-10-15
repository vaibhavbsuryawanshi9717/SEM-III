#include <stdio.h>      /* for printf() and fprintf() */
#include <sys/socket.h> /* for socket(), connect(), sendto(), and recvfrom() */
#include <arpa/inet.h>  /* for sockaddr_in and inet_addr() */
#include <stdlib.h>     /* for atoi() and exit() */
#include <string.h>     /* for memset() */
#include <unistd.h>     /* for close() */
  #include <sys/wait.h>
#include<sys/types.h> 

#define MAXRECVSTRING 255  /* Longest string to receive */

void DieWithError(char *errorMessage)
{
	printf("\n %s",errorMessage);
}  /* External error handling function */

int main(int argc, char *argv[])
{
    int sock,childPid,returnStatus;                         /* Socket */
    struct sockaddr_in broadcastAddr; /* Broadcast Address */
    unsigned short broadcastPort;     /* Port */
    char recvString[MAXRECVSTRING+1]; /* Buffer for received string */
    int recvStringLen;                /* Length of received string */

    broadcastPort = atoi("8082");   /* First arg: broadcast port */

    /* Create a best-effort datagram socket using UDP */
    if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0)
        DieWithError("socket() failed");

    /* Construct bind structure */
    memset(&broadcastAddr, 0, sizeof(broadcastAddr));   /* Zero out structure */
    broadcastAddr.sin_family = AF_INET;                 /* Internet address family */
    broadcastAddr.sin_addr.s_addr = htonl(INADDR_ANY);  /* Any incoming interface */
    broadcastAddr.sin_port = htons(broadcastPort);      /* Broadcast port */
    childPid = fork();
	//while(1)
    //{
    if(childPid==0)
	{
        while(1)
        {
		printf("\nchild:");
    // Bind to the broadcast port 
    if (bind(sock, (struct sockaddr *) &broadcastAddr, sizeof(broadcastAddr)) < 0)
        DieWithError("bind() failed");
    /* Receive a single datagram from the server */
    if ((recvStringLen = recvfrom(sock, recvString, MAXRECVSTRING, 0, NULL, 0)) < 0)
        DieWithError("recvfrom() failed");

    recvString[recvStringLen] = '\0';
    printf("Received: %s\n", recvString);
    memset(&recvString,'\0',sizeof(recvString));
        }
        /* Print the received string */    //close(sock);    //exit(0);
     }
	else
	{
        /*printf("\nParent\n");
          if (bind(sock, (struct sockaddr *) &broadcastAddr, sizeof(broadcastAddr)) < 0)
                       DieWithError("bind() failed");
               /* Receive a single datagram from the server 
               if ((recvStringLen = recvfrom(sock, recvString, MAXRECVSTRING, 0, NULL, 0)) < 0)
                            DieWithError("recvfrom() failed");
                
                    recvString[recvStringLen] = '\0';
                         printf("Received: %s\n", recvString);*/
	waitpid(childPid, &returnStatus, 0);  // Parent process waits here for child to terminate.

    if (returnStatus == 0)  // Verify child process terminated without error.  
    {
       printf( "The child process terminated normally." );    
    }

    if (returnStatus == 1)      
    {
       printf("The child process terminated with an error!.");    
    }
	}
//}
}
