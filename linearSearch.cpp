#include <iostream> 

using namespace std;

int linearSearch(int arr[], int size, int key) {
	for (int i=0; i<size; i++) {
		if (key==arr[i]){
			return i;
		}
	}
	return -1;
}

int main() {
	cout<<"Enter the size of array: \n";
	int n;
	cin>>n;

	int arr[n];
	cout<<"Enter the elements of the "<<n<<" sized array: \n";

	for (int i=0; i<n; i++) {
		cin>>arr[i];
	}

	int key;
	cout<<"Enter element which is to be found: \n";
	cin>>key;

	cout<<linearSearch(arr, n, key);

	return 0;
}
