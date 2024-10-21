function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const num = 10;
console.log(`Fibonacci of ${num} is ${fibonacci(num)}`);