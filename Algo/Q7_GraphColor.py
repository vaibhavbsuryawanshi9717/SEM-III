def is_safe(n,graph,colors,c):
    # Iterate trough adjacent vertices
    for i in range(n):
        if graph[n][i] and c == colors[i]: return False
    return True

def graphColoringUtil(graph,color_nb,colors,n):
    # Check if all vertices are assigned a color
    if color_nb+1==n:
        return True

    for c in range(1,color_nb+1):
        # Check if assignment of color c to n is possible
        if is_safe(n,graph,colors,c):
            colors[n] = c
            # Recursively assign colors to the rest of the vertices
            if graphColoringUtil(graph,color_nb,colors,n+1):
                return True
            # If there is no solution, remove color (BACKTRACK)
            colors[n]=0

vertex_nb = 4
color_nb = 3
colors=[0]*vertex_nb

graph=[[0, 1, 1, 1],[1, 0, 1, 0],[1, 1, 0, 1],[1, 0, 1, 0],]

if graphColoringUtil(graph,color_nb,colors,0):
    print(colors)
else:
    print("No solutions")