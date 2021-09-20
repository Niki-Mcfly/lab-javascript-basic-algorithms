// Iteration 1: Names and Input
let hacker1 = 'Tom';
console.log('The driver name is ' + hacker1);

let hacker2 = 'Jerry';
console.log('The navigator´s name is ' + hacker2);

// Iteration 2: Conditionals
console.log(hacker1.length);
console.log(hacker2.length);

if (hacker1.length >= hacker2.length) {
  console.log(
    'The driver has the longest name, it has ' + hacker1 + ' characters.'
  );
} else {
  hacker1.length < hacker2.length;
  console.log(
    'It seems that the navigator has the longest name, it has ' +
      hacker2.length +
      ' characters.'
  );
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"//

hacker1 = hacker1.split('').join(' '); 
//Split('')werden die buchstaben in ein array gepackt join(' ') fügt die Elemente des arrays mit einem Leerzeichen getrennt zu string zusammen//
console.log(hacker1);

hacker1.toUpperCase();
console.log(hacker1.toUpperCase());

//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"//

hacker2.split("").reverse().join("");
console.log(hacker2.split("").reverse().join(""));