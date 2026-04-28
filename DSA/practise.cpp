#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    sort(strs.begin(), strs.end());
    string first = strs[0];
    string last = strs.back();
    int i = 0;
    while (i < first.size() && i < last.size() && first[i] == last[i]) {
        i++;
    }
    return first.substr(0, i);
}

int main() {
  vector<string> str = {"flower", "flow", "flight"};
  sort(str.begin(), str.end());
  cout << str[0] << endl;
  cout <<str[1] << endl;
    cout << str[2] << endl;
  
    return 0;
}