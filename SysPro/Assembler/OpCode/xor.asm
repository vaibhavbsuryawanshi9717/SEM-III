	section .data
	a db 9
	section .text
	global main
	
main:
xor eax,ecx
xor ecx,ecx
xor edx,ecx
xor ebx,ecx
xor esp,ecx
xor ebp,ecx
xor esi,ecx
xor edi,ecx
xor eax,ebx

xor eax,000
xor ecx,001
xor edx,010
xor ebx,011
xor esp,100
xor ebp,101
xor esi,110
xor edi,111

xor eax,104
xor ecx,104
xor edx,104
xor ebx,104
xor esp,104
xor ebp,104
xor esi,104
xor edi,104
	 
xor eax,dword[a]
xor ecx,dword[a]
xor edx,dword[a]
xor ebx,dword[a]
xor esp,dword[a]
xor ebp,dword[a]
xor esi,dword[a]
xor edi,dword[a]

xor dword[a],eax
xor dword[a],ecx
xor dword[a],edx
xor dword[a],ebx
xor dword[a],esp
xor dword[a],ebp
xor dword[a],esi
xor dword[a],edi

xor eax,dword[eax+ebx*2]
xor ecx,dword[ecx+ebx*2]
xor edx,dword[edx+ebx*2]
xor ebx,dword[ebx+ebx*2]
xor esp,dword[esp+ebx*2]
xor ebp,dword[ebp+ebx*2]
xor esi,dword[esi+ebx*2]
xor edi,dword[edi+ebx*2]

xor dword[a],10
