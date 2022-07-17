const isPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log(`${n} is not prime`);
      return false;
    }
  }

  for (let i = 2; i < n; i++) {
    if (n % i !== 0) {
      console.log(`${n} is prime`);
      return true;
    }
  }
};

isPrime(2);
isPrime(4);
isPrime(5);
isPrime(7);
isPrime(8);
isPrime(22);
isPrime(25);
isPrime(32);
isPrime(33);
isPrime(11);

const isPrime2 = (n) => {
  if (n < 2) return false;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
};

isPrime2(2);
isPrime2(4);
isPrime2(5);
isPrime2(7);
isPrime2(8);
isPrime2(22);
isPrime2(25);
