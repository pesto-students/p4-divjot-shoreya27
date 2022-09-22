function Person(name){
    this.name = name
}

function Teacher(name){
    Person.call(this, name)
}

Teacher.prototype.teach = function(subject){
    console.log(`${this.name} is now teaching ${subject}`)
}

let arvind = new Teacher("arvind")//create a teacher object
arvind.teach("math")