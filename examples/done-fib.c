int fib(int n) {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

int main() {
    int i, result;
    i = 6;
    result = fib(i);
    return result;
}