#include <iostream>
#include <string>
#include <vector>
#include <unordered_set>
#include <algorithm>
using namespace std;
//Recursion
int lcsRec(string str1 , string str2){
    if(str1.size() == 0 || str2.size() == 0){
        return 0;
    }
    int n = str1.size();
    int m = str2.size();

    if(str1[n-1] == str2[m-1]){
        return 1+lcsRec(str1.substr(0,n-1),str2.substr(0,m-1));
    }else{
        int ans1 = lcsRec(str1.substr(0,n-1),str2);
        int ans2 = lcsRec(str1 , str2.substr(0,m-1));
        return max(ans1, ans2);
    }


}

// Memoization

int lcsMem(string str1 , string str2 ,vector<vector<int>> dp){
    if(str1.size() == 0 || str2.size() == 0){
        return 0;
    }
    int n = str1.size();
    int m = str2.size();

    if(dp[n][m] !=-1){
        return dp[n][m];
    }

    if(str1[n-1] == str2[m-1]){
        dp[n][m] = 1+lcsMem(str1.substr(0,n-1),str2.substr(0,m-1),dp);
    }else{
        int ans1 = lcsMem(str1.substr(0,n-1),str2 , dp);
        int ans2 = lcsMem(str1 , str2.substr(0,m-1 ),dp);
      dp[n][m] =max(ans1, ans2);
    }
return dp[n][m];

}
// Tabulation

int lcsTab(string str1 , string str2){
    int n = str1.size();
    int m = str2.size();
    vector<vector<int>> dp(n+1 , vector<int> (m+1 ,0));

    for(int i =1 ;i<n+1 ;i++){
        for(int j =1 ;j<m+1 ;j++){
            if(str1[n-i] == str2[m-j]){
                dp[i][j] = 1+dp[i-1][j-1];
            }else{
                dp[i][j] = max(dp[i-1][j] , dp[i][j-1]);
            }
        }
    }
    
     for(int i=0;i<=n;i++){
        for(int j =0 ;j<=m ;j++){
        cout << dp[i][j] << " ";
    }
    cout << endl;
    }
    return dp[n][m];

}

//----------------------------------------------------------------------------------
//Longest Common Substring

int longestCommonSubstring(string str1 , string str2){
    int n = str1.size();
    int m = str2.size();
    int ans =0;
    vector<vector<int>> dp(n+1 , vector<int>(m+1 ,0));

    for(int i =1;i<n+1;i++){
        for(int j=1;j<m+1;j++){
            if(str1[i-1]==str2[j-1]){
                dp[i][j] = dp[i-1][j-1] +1;
                ans = max(ans,dp[i][j]);
            }else{
                dp[i][j] =0;
            }

     
        }
    }
    return ans;
}
//-----------------------------------------------------------------
// Longest Increasing subsequence

int LIS(vector<int> arr){ //O(n^2)
    unordered_set<int> s (arr.begin() , arr.end()); //unique - O(n)

    vector<int> arr2(s.begin() , s.end()); // copy from set to vector

    sort(arr2.begin() , arr2.end()); // ascending sort - O(nlogn)

    //LCS => LIS
    int n = arr.size();
    int m = arr2.size();
    vector<vector<int>> dp(n +1 , vector<int>(m+1,0));

    for(int i =1;i<n+1 ;i++){ //O(n*m)
        for(int j = 1;j< m+1 ;j++){
            if(arr[i-1] == arr2[j-1]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                 dp[i][j] = max(dp[i-1][j] , dp[i][j-1]);
            }
        }
    }
    return dp[n][m];

    
}



int main(){
    //Longest Common Sequence
    // string str1 = "abcd";
    // string str2 = "ace";
    // int n = str1.size();
    // int m = str2.size();

    // vector<vector<int>> dp(n+1 ,vector<int>(m+1 ,-1));

    // cout << lcsTab(str1 , str2) << endl;
//--------------------------------------------
    // string str1 = "abcde";
    // string str2 = "abgce";

    // cout << longestCommonSubstring(str1,str2) <<endl;

//--------------------------------------------

vector<int> arr= {50,3,10,7,40,80};
cout << LIS(arr) << endl;
    return 0;
}