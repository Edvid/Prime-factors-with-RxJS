const interval = rxjs.interval(0);

const primes = interval.pipe(rxjs.map(num => `num: ${num} | prime factors: ${primeFactors(num).join(", ")}`));

//All primes are actually calculated, but it only prints to screen every 200 miliseconds
const printable = primes.pipe(rxjs.throttleTime(200));

printable.subscribe(val => pushToDom(val));

// Implementation from Alan Judi & Gershom Maes
// on https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
function primeFactors(n) {
    const factors = [];
    let divisor = 2;
  
    while (n >= 2) {
      if (n % divisor == 0) {
        factors.push(divisor);
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factors;
  }

function pushToDom(val){
    let p = document.createElement("p");
    p.innerText = val;
    document.body.appendChild(p);
}