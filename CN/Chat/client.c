#include <stdio.h>      /* for printf() and fprintf() */
#include <sys/socket.h> /* for socket() and bind() */
#include <arpa/inet.h>  /* for sockaddr_in */
#include <stdlib.h>     /* for atoi() and exit() */
#include <string.h>     /* for memset() */
#include <unistd.h>     /* for close() */

void DieWithError(char *errorMessage)
{
	printf("\n %s",errorMessage);
}  /* External error handling function */

int main(int argc, char *argv[])
{
    int sock;
                         /* Socket */
	int nobytesend=0;
    struct sockaddr_in broadcastAddr; /* Broadcast address */
    char *broadcastIP;                /* IP broadcast address */
    unsigned short broadcastPort;     /* Server port */
    char *sendString;                 /* String to broadcast */
    int broadcastPermission;          /* Socket opt to set permission to broadcast */
    unsigned int sendStringLen;       /* Length of string to broadcast */

    broadcastIP = "192.168.43.245";            /* First arg:  broadcast IP address */ 
   // broadcastIP = "192.168.1.2";            /* First arg:  broadcast IP address */ 
    broadcastPort = atoi("8082");    /* Second arg:  broadcast port */
    sendString = "ok";             /* Third arg:  string to broadcast */
        printf("socket()");
	
    /* Create socket for sending/receiving datagrams */
    if ((sock = socket(PF_INET, SOCK_DGRAM, IPPROTO_UDP)) < 0)
        DieWithError("socket() failed");

    /* Set socket to allow broadcast */
    broadcastPermission = 1;
    if (setsockopt(sock, SOL_SOCKET, SO_BROADCAST, (void *) &broadcastPermission, 
          sizeof(broadcastPermission)) < 0)
        DieWithError("setsockopt() failed");

    /* Construct local address structure */
    memset(&broadcastAddr, 0, sizeof(broadcastAddr));   /* Zero out structure */
    broadcastAddr.sin_family = AF_INET;                 /* Internet address family */
    broadcastAddr.sin_addr.s_addr = inet_addr(broadcastIP);/* Broadcast IP address */
    broadcastAddr.sin_port = htons(broadcastPort);         /* Broadcast port */

    sendStringLen = strlen(sendString);  /* Find length of sendString */
   // for (;;) /* Run forever */
   // {
         /* Broadcast sendString in datagram to clients every 3 seconds*/
         nobytesend = sendto(sock, sendString, sendStringLen, 0, (struct sockaddr *) 
               &broadcastAddr, sizeof(broadcastAddr));
	printf("no byte send %d",nobytesend);
           

        sleep(3);   /* Avoids flooding the network */
   // }
    /* NOT REACHED */
}
