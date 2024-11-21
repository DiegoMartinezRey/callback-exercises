// # Ejercicios

// ## Arrays métodos callback

// - Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array

const getNumbersMultiplyByIndex = (numbers) => {
  numbers.forEach((number, index) => {
    console.log(
      "Numero: " + number + " index: " + index + " resultado: " + number * index
    );
  });
};

console.log("EJERCICIO 1:");
getNumbersMultiplyByIndex([1, 2, 3, 4, 5]);

// - Crea una función que reciba un array de números y devuelva un array con cada número dividido por su índice + 1

const getArrayDivideByIndexPlusOne = (numbers) => {
  const result = numbers.map((number, index) => {
    return number / (index + 1);
  });
  console.log("Resultado: " + result);
};

console.log("EJERCICIO 2:");
getArrayDivideByIndexPlusOne([5, 4, 8, 3, 2]);

// - Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const getUpperWord = (words) => {
  const result = words.map((word) => {
    return word.toUpperCase();
  });
  console.log("Resultado: " + result);
};

console.log("EJERCICIO 3:");
getUpperWord(["hola", "adios", "chao"]);

// - Crea una función que reciba un array de palabras y una letra. La función devolverá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide. Tiene que funcionar con mayúsculas y minúsculas.

const getWordByLetter = (words, letter) => {
  const getWordWithLetter = words.filter((word) => {
    return word[0].toLowerCase() === letter.toLowerCase();
  });
  if (getWordWithLetter.length === 0) {
    console.log("Ninguna palabra coincide");
  } else {
    console.log("Se encontro: ", getWordWithLetter);
  }
};

console.log("EJERCICIO 4:");
getWordByLetter(["Hola", "chao", "helado"], "h");

// - Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const getSumOfNums = (numbers) => {
  if (numbers && numbers.length === 10) {
    const result = numbers.reduce((acc, number) => {
      return acc + number;
    });
    console.log(result);
  } else {
    console.log("El array no es de 10 numeros");
  }
};

console.log("EJERCICIO 5:");
getSumOfNums([1, 2, 8, 5, 7, 10, 2, 6, 9, 8]);

// - Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//   "Número: 2 - Cuadrado: 4 - Cubo: 8".

const getMathOperationInArray = (numbers) => {
  if (numbers && numbers.length === 10) {
    numbers.forEach((number) => {
      console.log(
        `Numero: ${number} - Cuadrado: ${Math.pow(
          number,
          2
        )} - Cubo: ${Math.pow(number, 3)}`
      );
    });
  } else {
    console.log("El array no es de 10 numeros");
  }
};

console.log("EJERCICIO 6:");
getMathOperationInArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

// - Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const getCapitalVowels = (word) => {
  const vocales = "aeiouáéíóú";
  const result = word.split("").reduce((acc, letter) => {
    if (vocales.includes(letter.toLowerCase())) {
      return acc + letter.toUpperCase();
    } else {
      return acc + letter;
    }
  }, "");
  console.log(result);
};

console.log("EJERCICIO 7:");
getCapitalVowels("arangaricutirimicuaro");

// - Crea una función que reciba un array de 10 números y te diga si alguno es mayor de 5.

const checkIsHigherOf5 = (numbers) => {
  const result = numbers.some((number) => {
    return number > 5;
  });
  console.log(result);
};

console.log("EJERCICIO 8:");
checkIsHigherOf5([2, 4, 6, 3, 4, 2, 1, 2, 4, 8]);

// - Crea una función que reciba un array de 5 palabras y un número y te devuelva un array con las palabras que tienen esa longitud, por ejemplo si le envias (['hola', 'adios', 'gato', 'perro', 'casa'], 4), te devolverá un array con ['hola', 'gato', 'casa']

const getArrayFromWords = (words, num) => {
  const result = words.filter((word) => {
    return word.length === num;
  });
  console.log(result);
};

console.log("EJERCICIO 9:");
getArrayFromWords(["hola", "adios", "gato", "perro", "casa"], 4);

// - Crea una función que reciba un array de números y un número y te devuelva un array con los números que sean divisores de ese número

const getNumbersOfDivisors = (numbers, num) => {
  const result = numbers.filter((number) => {
    return number % num === 0;
  });
  console.log(result);
};

console.log("EJERCICIO 10:");
getNumbersOfDivisors([2, 4, 6, 7, 8, 9], 3);

// - Crea una función que reciba este array y te devuelva sólo los usuarios cuya edad sea menor de 30
const array = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 20 },
];

const getUsersLessThan30 = (users) => {
  const result = users.filter((user) => {
    return user.age < 30;
  });
  console.log(result);
};

console.log("EJERCICIO 11:");
getUsersLessThan30(array);

// - Crea una función que reciba un array con 5 números y te diga si todos son pares o no.

const getIfIsOdd = (numbers) => {
  if (numbers && numbers.length === 5) {
    const result = numbers.every((number) => {
      return number % 2 === 0;
    });
    console.log(result);
  } else {
    console.log("El array debe tener 5 numeros");
  }
};

console.log("EJERCICIO 12:");
getIfIsOdd([2, 4, 6, 2, 8]);

// - Crea una función que reciba un array de 5 palabras y las ordene en base a su longitud, de menor a mayor.

const orderWordsByLength = (words) => {
  const result = words.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(result);
};

console.log("EJERCICIO 13:");
orderWordsByLength(["hola", "adios", "hi", "sol", "diego"]);

// - Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Mariposas" deberá imprimir "sasopiraM". No se puede usar reverse()

const getReverseWord = (word) => {
  const result = word.split("").reduce((acc, letter) => {
    return letter + acc;
  });
  console.log(result);
};

console.log("EJERCICIO 14:");
getReverseWord("Mariposas");

// ## Retos!!

// - Crea una función que reciba un array de 5 números de 2 dígitos. La función debe ser capaz de sumar los digitos de cada número, es decir si yo le envío [21, 34, 87, 10, 28] la función tendrá que ser capaz de devolverme un array con [3, 7, 15, 1, 10]

const getSumOfNumbers = (numbers) => {
  const result = numbers.map((number) => {
    const num1 = Math.floor(number / 10);
    const num2 = number % 10;
    return num1 + num2;
  });
  console.log(result);
};

console.log("RETO 1:");
getSumOfNumbers([21, 34, 87, 10, 28]);

//   - Utilizando el array a continuación, crea una función que reciba un id de usuario y borre ese usuario del array.

const users = [
  {
    id: "user001",
    name: "Juan",
    surname: "Pérez",
    age: 30,
  },
  {
    id: "user002",
    name: "María",
    surname: "González",
    age: 25,
  },
  {
    id: "user003",
    name: "Pedro",
    surname: "Sánchez",
    age: 35,
  },
  {
    id: "user004",
    name: "Ana",
    surname: "Martínez",
    age: 28,
  },
  {
    id: "user005",
    name: "Luis",
    surname: "López",
    age: 40,
  },
];

const deleteUserById = (userToDelete) => {
  const result = users.filter((user) => {
    return user.id !== userToDelete;
  });
  console.log(result);
};

deleteUserById("user004");
