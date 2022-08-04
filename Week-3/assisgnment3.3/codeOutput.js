function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

//Count is 0 wil be logged due to closure
//In closure , when function and where function is declared decides the variable values
//here when createIncrement() is called, count variable is declared with value 0
//So message become 'Count is 0' in string
//we called increment() 3 times which do not have anything to do with message variable
//as its not changing the value of message , its is only chnanging value of count variable
//Thats why Count is 0 logged
