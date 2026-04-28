#include <iostream>
#include <vector>
#include <string>
#include <list>
#include <queue>
#include <stack>
using namespace std;

class Graph{
    int V;
    list<int> *l;
    bool isUndir;
public:
    Graph(int V , bool isUndir = true){
        this->V = V;
        l = new list<int>[V];
        this->isUndir = isUndir;
    }

    void addEdge(int u , int v){ // u---v
        l[u].push_back(v);
        if(isUndir){
        l[v].push_back(u); 
        }   
       
    }

    void print(){
        for(int u =0 ;u<V;u++){
            list<int> neigbors = l[u];

            cout << u << " : ";
            for(int v : neigbors){
                cout << v << " ";
            }
            cout << endl;
        }
    }
//----------------------------------------------------------------------------------------------
    // BFS 
    void bfsHelper(int src , vector<bool> &vis){ // O(V+E)
        queue<int> q;

        q.push(src);
        vis[src] = true;
        while(q.size() > 0){
            int u = q.front(); // curr vertex
            cout << u << " ";
            q.pop();
            list<int> neigbors = l[u];
            for(int v : neigbors){
                if(!vis[v]){
                    vis[v] = true;
                    q.push(v);
                }
            }
            
        }
    }

    void bfs(){
        vector<bool> vis(V, false);
        for(int i =0;i<V;i++){
            if(!vis[i]){
                bfsHelper(i , vis);
                cout << endl;
            }
        }
    }
//---------------------------------------------------------------------------------------------
// DFS

    void dfsHelper(int u , vector<bool> &vis){ // O(V+e)
        vis[u] = true;
        cout << u <<" ";
        list<int> neighbors = l[u];

        for(int v : neighbors){
            if(!vis[v]){
                dfsHelper(v, vis);
            }
        }
    }

    void dfs(){
vector<bool> vis(V,false);
for(int i = 0;i<V ;i++){
    dfsHelper(0,vis);
    cout << endl;
}
    }
//---------------------------------------------------------------------

bool hasPathHelper(int src , int dest , vector<bool> &vis){
    if(src == dest){
        return true;
    }

    vis[src] = true;

    list<int> neighbors = l[src];
    for(int v : neighbors){
        if(!vis[v]){
            if(hasPathHelper(v , dest , vis)){
                return true;
            }
        }
    }
    return false;
}

bool hasPath(int src , int dest){
    vector<bool> vis (V, false);
    return hasPathHelper(src, dest, vis);
}


//------------------------------------------------------------------------

bool undirCycHelper(int src , int par , vector<bool> &vis){
    vis[src] = true;

    list<int> neighbors = l[src];
    for(int v : neighbors){
        if(!vis[v]){
            if(undirCycHelper(v, src , vis)){
                return true;
            }
        }else{
            if(v != par){ // cycle condition
                return true; 
            }
        }
    }
    return false;
}
bool isCycleUndir(){
    vector<bool>vis(V,false);
    return undirCycHelper(0,-1 , vis);
}

//------------------------------------------------------------------------------------------

bool dirCycleHelper(int src, vector<bool> &vis , vector<bool> &recPath ){
    vis[src] = true;
    recPath[src] = true;
    list <int> neighbors = l[src];

    for(int v : neighbors){
        if(!vis[v]){
            if(dirCycleHelper(v , vis , recPath)){
                return true;
            }
        }else{
            if(recPath[v]){
                return true;
            }
        }
    }

    recPath[src] = false;
    return false;
}


bool isCycleDir(){
    vector<bool> vis(V,false);
    vector<bool> recPath(V,false);
    for(int i =0;i<V;i++){
        if(!vis[i]){
            if(dirCycleHelper(i,vis,recPath)){
                return true;
            }
        }
    }
}

//---------------------------------------------------------------

bool isBipartite(){
    queue<int> q;
    vector<int>color(V,-1);

    q.push(0);
    color[0] =0 ;

    while(q.size() > 0){
        int curr = q.front();
        q.pop();

        list<int> neighbors = l[curr];

        for(int v : neighbors){
            if(color[v] == -1){
                color[v] = !color[curr];
                q.push(v);
            }
            else{
                if(color[v] == color[curr]){
                    return false;
                }
            }
        }
    }
    return true;

}

//------------------------------------------------------------------

// All path problem
// dfs
void allPathHelper(int src, int dest,vector<bool> &vist , string &path ){
    if(src==dest){
        cout << path << dest << endl;
        return;
    }
    vist[src] = true;
    path+= to_string(src);
    list<int> neighbors = l[src];
    for(int v : neighbors){
      if(!vist[v]){
          allPathHelper(v,dest,vist,path);
      }
    }
    path = path.substr(0, path.size()-1) ;
    vist[src] = false;
}

void printAllPath(int src , int dest){
    vector<bool> vis(V , false);

    string path = " ";
    allPathHelper(src, dest , vis, path);

}

//-------------------------------------------------------------------------------

// Topological Sorting

void topoSortHelper(int src , vector<bool> &vis , stack<int> &s){
    vis[src] = true;

    list<int> neighbors = l[src];
    for(int v : neighbors){
        if(!vis[v]){
            topoSortHelper(v,vis,s);
        }
    }

    s.push(src);
}

void topoSort(){
    stack <int> s ;
    vector<bool> vis(V,false);
    for(int i =0;i<V ;i++){
        if(!vis[i]){
             topoSortHelper(i,vis,s);
        }
    }

    while(!s.empty()){
        cout << s.top() << " ";
       s.pop();
    }
    cout << endl;
   
}

//-----------------------------------------------------------------------
// Topological Sorting using BFS 
// Kahn's Algorithm
    void calcIndegree(vector<int> &indeg){
        for(int i =0 ;i<V;i++){
            list<int> neigbors = l[i];
            for(int v : neigbors){ // u --> v
                indeg[v]++;
            }
        }
    }
    void topoSort2(){
        vector<int> indeg(V,0);
        calcIndegree(indeg);
        queue<int> q;
        //0 indeg nodes -> starting point

        for(int i=0;i<V ;i++){
            if(indeg[i] == 0){
                q.push(i);
            }
        }
        while(q.size() > 0){
            int curr = q.front() ;
            q.pop();
            cout <<  curr <<" ";
            list<int> neighbors = l[curr];
            for(int v :  neighbors){
                indeg[v]--;
                if(indeg[v] == 0){ // no pending dependencies
                    q.push(v);
                }
            }
        }
        cout << endl;
    }

};



int main(){

    Graph graph(6,false);
    graph.addEdge(2,3);
    graph.addEdge(3,1);

    graph.addEdge(4,0);
    graph.addEdge(4,1);

    graph.addEdge(5,0);
     graph.addEdge(5,2);

    graph.topoSort2() ;
    return 0 ;
}