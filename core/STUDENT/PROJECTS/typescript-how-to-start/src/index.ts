(() => {
    // Вся твоя работа внутри этой функции
    let age: number = 30;
    let userName: string = "Alice";
    let isAdmin: boolean = true;
  
    let scores: number[] = [95, 87, 76];
    let names: string[] = ["Tom", "Jerry"];
    let person: [string, number] = ["Bob", 25]; 
  
    enum Role {
      Admin,
      User,
      Guest
    }
    let myRole: Role = Role.User;
  
    function greet(name: string): string {
      return `Hello, ${name}!`;
    }
  
    interface User {
      id: number;
      name: string;
      email?: string;
    }
  
    const user1: User = {
      id: 1,
      name: "Alice"
    };
  
    class Animal {
      constructor(public name: string) {}
      speak(): void {
        console.log(`${this.name} makes a sound.`);
      }
    }
  
    const dog = new Animal("Dog");
    dog.speak();
  
    let userId: number | string = 123;
    userId = "abc";
  
    type Direction = "left" | "right" | "up" | "down";
    let move: Direction = "up";
  
    type MathOperation = (a: number, b: number) => number;
    const add: MathOperation = (a, b) => a + b;
  
    type Status = "pending" | "completed" | "failed";
    let currentStatus: Status = "pending";
  })();
  