#include <iostream>
using namespace std;

//Binary Tree

class Node{
    public:
    int data ;
    Node* left;
    Node* right;

    Node(int val){
        data = val;
        left = NULL;
        right = NULL;
    }

    ~Node(){
        delete left;
        delete right;
    }

    void push(int val){
        if(val < data){
            if(left == NULL){
                left = new Node(val);
            }else{
                left->push(val);
            }
        }else{
            if(right == NULL){
                right = new Node(val);
            }else{
                right->push(val);
            }
        }
    }

};


int main(){
    return 0;
}