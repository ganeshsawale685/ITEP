#include <iostream>
#include <vector>
using namespace std;

// fibonacci series with T.C O(n)
// Memoization : The solution by using recursion
int fibDP(int n , vector<int> &f){
    if(n == 0 || n ==1){
        return n;
    }
    if(f[n] != -1){
        return f[n];
    }
   f[n] =fibDP(n-1 ,f ) + fibDP(n-2 ,f);
   return f[n];
}
// Tabulation : The solution using loops

int fibTab(int n){
    vector<int> fib(n+1,0);
    fib[0]=0 ;
    fib[1] =1;
    for(int i =2 ;i<=n;i++){
        fib[i] = fib[i-1] + fib[i -2];
    }
return fib[n];
}
//-------------------------------------------------------------------------

//Climbing Stair Case

// 1. Recursion
int countWaysRec(int n){ // O(2^n)
    if(n == 0 || n == 1){
        return 1;
    }

    return countWaysRec(n-1) + countWaysRec(n-2);
}
// Memoization

int countWaysMem(int n , vector<int> dp){ //O(n)
    if(n == 0 || n == 1){
        return 1;
    }
    if(dp[n] != -1){
        return dp[n];
    }
    dp[n]= countWaysMem(n-1 , dp) + countWaysMem(n-2,dp);

    return dp[n];
}
// Tabulation
int countWaysTab(int n ){ //O(n)
    vector<int> dp(n+1 , 0);
    dp[0] =1;
    dp[1]=1;
    for(int i =2 ;i<=n;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}

//----------------------------------------------------------------------
// 0/1 Knapsack Problem
// Recursion
int knapsackRec(vector<int> val , vector <int> wt , int W , int n){ // O(2^n)f
    if(n == 0 || W ==0){
        return 0;
    }
    int itemWt = wt[n-1];
    int itemVal = val[n-1];

    if(itemWt <= W){
        //include
        int ans1 = knapsackRec(val , wt , W-itemWt , n-1) + itemVal;
        //exclude
        int ans2 = knapsackRec (val , wt , W , n-1);
        return max(ans1 , ans2);
    }else{
        //exclude
        return knapsackRec (val , wt , W , n-1);
    }

}
// Memoization
int knapsackMem(vector<int> val , vector <int> wt , int W , int n ,vector<vector<int>> &dp){ // O(n*W) 
    if(n == 0 || W ==0){
        return 0;
    }
    if(dp[n][W] != -1 ){
        return dp[n][W];
    }
    int itemWt = wt[n-1];
    int itemVal = val[n-1];

    if(itemWt <= W){
        //include
        int ans1 = knapsackMem(val , wt , W-itemWt , n-1,dp) + itemVal;
        //exclude
        int ans2 = knapsackMem (val , wt , W , n-1 ,dp);
        dp[n][W] = max(ans1 , ans2);
    }else{
        //exclude
          dp[n][W] =knapsackMem (val , wt , W , n-1 ,dp);
    }
    return dp[n][W];

}

// Tabulation

void knapsackTab(vector<int> val , vector <int> wt , int W , int n ){
   vector<vector<int>> dp(n+1 , vector<int>(W+1 ,0));
   for(int i =1;i<n+1 ;i++){
     for(int j =1 ;j<W+1 ;j++){
        int itemWt = wt[i-1];
        int itemVal = val[i-1];

        if(itemWt <= j){
            dp[i][j] = max(itemVal + dp[i-1][j-itemWt] , dp[i-1][j]);

        }else{
            dp[i][j]=dp[i-1][j];
        }
     }
   }

   for(int i =0;i<n+1;i++){
    for(int j =0 ;j<W+1 ;j++){
        cout << dp[i][j] << " ";
    }
    cout << endl;
   }
    
   cout << dp[n][W] << endl;
}

//------------------------------------------------------------------------
// Target Sum Subset

bool targetSum(vector<int> nums , int target){
    int n =nums.size();
    vector<vector<int>> dp(n+1 , vector<int>(target+1,0));

    for(int i =1 ;i<=n;i++){
        for(int j =1 ;j<=target ;j++){
            if(nums[i-1] <= j){
                dp[i][j] = max((nums[i-1] + dp[i-1][j-nums[i-1]]), dp[i-1][j] );
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    for(int i=0;i<=n;i++){
        for(int j =0 ;j<=target ;j++){
        cout << dp[i][j] << " ";
    }
    cout << endl;
   }
    return dp[n][target] == target;
}
//---------------------------------------------------------------------------
// Unbounded Knapsack Problem

int unboundedKnapsack(vector<int> val , vector<int> wt ,int W , int n){
    vector<vector<int>> dp(n+1 , vector<int>(W+1,0));
    for(int i =1; i<n+1 ;i++){
        for(int j  = 1;j<W+1 ;j++){
            int itemVal = val[i-1];
            int itemWt = wt[i-1];

            if(itemWt <= j){
                dp[i][j] = max( itemVal+dp[i][j-itemWt]  , dp[i-1][j]);
            }else{
                dp[i][j] = dp[i-1][j];
            }
        }
    }
    return dp[n][W];
}
// coin change 
 int coinChange(vector<int>& coins, int amount) {
        int n = coins.size();
        vector<vector<int>> dp(n+1,vector<int> (amount+1 ,0));
        for(int i =0;i<n+1;i++){
            dp[i][0] = 1;
        }
        for(int i =1;i <n+1 ;i++){
            for(int j=1;j<amount+1;j++){
                if(coins[i-1] <= j){//valid
                dp[i][j] = dp[i][j-coins[i-1]] + dp[i-1][j];
                }else{//invalid
                 dp[i][j] = dp[i-1][j];
                }
            }
        }
        return dp[n][amount];
    }
//---------------------------------------------------------------------------------------------

//Rod Cutting 

int rodCutting(vector<int> price , vector<int> length , int rodLength){
    int n = length.size();

    vector<vector<int>> dp(n+1 , vector<int>(rodLength+1 , 0));

    for(int i =1; i<n+1 ;i++){
       for(int j =1 ;j<rodLength+1;j++){
        if(length[i-1] <= j){
            dp[i][j] = max(price[i-1]+dp[i][j-length[i-1]] , dp[i-1][j]);
        }else{
            dp[i][j] = dp[i-1][j];
        }
       }
    }
     for(int i=0;i<=n;i++){
        for(int j =0 ;j<=rodLength ;j++){
        cout << dp[i][j] << " ";
    }
    cout << endl;
   }
    return dp[n][rodLength];
}


int main(){
//     // vector<int> val ={15 ,14,10 , 45, 30};
//     vector<int> wt = {2,5,1,3,4};
//     int W = 7;
//     int n = 5;
//     // vector<vector<int>> dp(n+1 , vector<int>(W+1 ,-1));
//    cout << unboundedKnapsack(val, wt , W ,n ); 
//     // vector<int> nums ={4 ,2 ,7 ,1, 3};
//     // int target = 10;

//     // cout <<targetSum(nums,target) << endl;

//Rod Cutting
vector<int> price ={1,5 ,8 ,9 ,10 , 17 ,17 , 20};
vector<int> length ={1,2,3,4,5,6,7,8};
int rodLength = 8;

cout << rodCutting(price , length , rodLength) << endl;
    return 0;
}