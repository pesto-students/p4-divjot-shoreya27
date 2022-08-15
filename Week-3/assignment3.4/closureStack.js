function stack() {
  let items = [];
  function add(arg) {
    items.push(arg);
    console.log(items);
  }
  function get() {
    console.log(items.pop());
  }
  return [add, get];
}
const [add, get] = stack();

//Using closure we have scoped items
//variable in a closure.
//items variable cant be used outside the scope
add(5);
add(6);
add(7);
add(8);
add(9);
add(10);
add(11);
get();
