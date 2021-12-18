#include <iostream> 

using namespace std;

void sumFirstNforLoop (int num) {
	int sum=0;
	for (int i=1; i<=num; i++) {
		sum+=i;
	}
	cout<<sum<<endl;
	return;
}

int main () {
	int n;
	cout<<"Enter no. of natural nos. \n";
	cin>>n;
	sumFirstNforLoop(n);
	return 0;
}