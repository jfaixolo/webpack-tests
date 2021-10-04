// import _ from 'lodash';

export class Foo {
    constructor(x) {
        console.log(x);
    }

    bar() {
        return x;
    }
}

const doStuff = () => {
    let x = 1;
    let y = 2;
    let f = (a,b) => a+b;
    console.log(f(x, y));
}

export default doStuff;