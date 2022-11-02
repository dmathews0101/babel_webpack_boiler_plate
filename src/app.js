// let test = () => console.log(123);
// test();

import { person, sayHello } from './lib';
// alert(person.name);
// console.log(person.name);

// console.log(sayHello('Brad'));

async function getPosts() {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    return data;
}

getPosts().then(posts => console.log(posts))