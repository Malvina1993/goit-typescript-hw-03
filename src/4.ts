class Key{
    private signature: number
    constructor() {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
}

class Person{
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
    }
}

abstract class House{
    protected door: boolean = false ;
    protected key: Key;
    private tenants: Array<Person> = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

    public abstract openDoor(key: Key);

}

class MyHouse extends House{
    openDoor(key:Key) {
        if (this.key == key) {
            this.door = true;
       } 
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};