#include <iostream>
#include <vector> 
#include <queue>
#include <list>
#include <stack>
using namespace std;
// For Dijksrta Algo
class Edge{
public: 
    int v;
    int wt;
    Edge(int v , int wt){
        this->v = v;
        this->wt = wt;
    }
};


class Graph{
     int V;
     list<pair<int,int>> *l; // int , int : neighbor + wt
     bool isUndir;
public:
    Graph(int V , bool isUndir = true){
        this->V = V;
        l = new list<pair<int,int>>[V];
        this -> isUndir = isUndir;

    }
    // add edge with a parameter of weight  
    void addEdge(int u , int v , int wt){
        l[u].push_back(make_pair(v,wt));
        if(isUndir){
            l[v].push_back(make_pair(u,wt));
        }
    }

    
// Prims Algo Graph
    void primsAlgo(int src){
        priority_queue<pair<int, int> , vector<pair<int,int>> , greater<pair<int, int>> >pq;
        //(wt , v) -> minHeap
        vector<bool> mst(V,false);
       
        pq.push(make_pair(0,src)); 
        int ans =0;

        while(pq.size() > 0){
            int u = pq.top().second;
            int wt = pq.top().first;
            pq.pop();

            if(!mst[u]){
                mst[u] = true;
                ans+=wt;
                list<pair<int, int>> neighbors = l[u];
                for(pair<int, int> n: neighbors){
                    int v = n.first;
                    int currWt = n.second;
                    pq.push(make_pair(currWt , v));
                }
            }
        }
cout << "Cost of MST = " << ans << endl;
    }

};
//--------------------------------------------------------------------
// Dijkstra Algorithm

void dijkstra(int src ,vector<vector<Edge>> graph , int V ){
    priority_queue<pair<int, int> , vector<pair<int, int>> , greater<pair <int , int>>> pq;
    //pair(dist[v] ,v)
    vector<int> dist(V,INT16_MAX);
    pq.push(make_pair(0,src));
    dist[src] =0;

    while(pq.size() > 0 ){
        int u = pq.top().second;
        pq.pop();
        
        vector<Edge> edges = graph[u];
        for(Edge e : edges){ // e.v = vertex and e.wt = weight
            if(dist[e.v] > dist[u] + e.wt){ // edge relaxation
                dist[e.v] = dist[u] + e.wt;
                pq.push(make_pair(dist[e.v] , e.v ));
            }
        }
    }

    for(int d : dist){
        cout << d << " ";
    }
    cout << endl;
}

//---------------------------------------------------------------------
// Bellman ford Algorithm for shortest path along with the negative weight

void bellmanFord(vector<vector<Edge>> graph , int V , int src ){ //O(V.E)
        vector<int> dist(V,INT16_MAX);
        dist[src] = 0;
        for(int i =0 ; i<V-1 ;i++){
            for(int u =0 ;u<V;u++){
                for(Edge e : graph[u]){
                    if(dist[e.v] > dist[u] + e.wt){
                        dist[e.v] = dist[u] + e.wt;
                    }
                }
            }
        }
        for(int i=0 ;i<V ;i++){
            cout << dist[i] << " ";
        }
        cout << endl;
}

int main(){
    int V = 5;
//   <--------------------------A Graph using adjancency edge ---------------->
    // vector<vector<Edge>> graph(V);

    // graph[0].push_back(Edge(1,2));
    // graph[0].push_back(Edge(2,4));

    // graph[1].push_back(Edge(2,-4));


    // graph[2].push_back(Edge(3,2));

    // graph[3].push_back(Edge(4,4));

    // graph[4].push_back(Edge(1,-1));
    

    // bellmanFord(graph,V,0);
//--------------------------------------------------------------------------


Graph graph(4);
// Prims Algo Graph

    graph.addEdge(0,1,10);
    graph.addEdge(0,2,15);
    graph.addEdge(0,3,30);

    graph.addEdge(1,3,40);

    graph.addEdge(2,3,50);

    graph.primsAlgo(0);

    return 0;
}