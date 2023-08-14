
/////////////////////////////////////////////////////
/////////  TEMPLATE STRINGS  ///////////////////////

//////////  Answer # 1  /////////////////
const Person = (name, age) => {
  return `Hello, ${name}! You are ${age} years old.`;
};

const personName = "Alishba";
const personAge = 21;

const Message = Person(personName, personAge);
console.log(Message); // Output: Hello, Alishba! You are 21 years old

//////////////////////////
/////  Answer # 2  //////
const calculateAverageOfSum = numbers => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  const average = sum / numbers.length;

  return `Sum: ${sum}, Average: ${average}`;
};

const numberArray = [10, 20, 30, 40, 50];

const answer = calculateAverageOfSum(numberArray);
console.log(answer);

////////////////////////
/////  Answer # 3  /////
const hTMLElement = (tagName, text) => {
  return `<${tagName}>${text}</${tagName}>`;
};

const tagName = "p";
const text = "Welcom, to our website!";

const myElements = hTMLElement(tagName, text);
console.log(myElements);

/////////////////////////
/////  Answer # 4  /////
const getProductInfo = product => {
  const { name, price, quantity } = product;
  return `Product: ${product}, Price: $${price}, Quantity: ${quantity}`;
};

const productObject = {
  product: "Widget",
  price: 24.99,
  quantity: 10
};

const productInfo = getProductInfo(productObject);
console.log(productInfo);

///////////////////////////
//////  Answer # 5  ///////
const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
};

const inputDate = new Date(); // You can pass your desired date here

const formattedDate = formatDate(inputDate);
console.log(formattedDate);

  