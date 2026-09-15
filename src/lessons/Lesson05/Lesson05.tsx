import "./styles.css";

function Lesson05() {
  let userName: string = "Mary";

  let simpleNumber: number = 23;

  let isAdmin: boolean = true;

  let age: undefined = undefined;

  let data: null = null;

  let bigNumber: bigint = 12344444444444444444444444444444444422222n;

  let uniq: symbol = Symbol("description");

  const colors: string[] = ["red", "blue", "green"];

  const getUserData = (firstName: string, age: number): string => {
    return `${firstName} - ${age} y.o.`;
  };

  interface User {
    name: string;
    age: number;
    isAdmin?: boolean;
  }

  const userData: User = {
    name: "John",
    age: 43,
    // isAdmin: true,
  };
///////////////////////////////////
// Атоматическое опеределение типов
// | - union тип, позволяет перечислять разные типы, которые мы можем хранить в переменной
let year: number | string = 2026
year = "2025"

// any - любой тип (! на крайний случай)
let postcode: any = 234999
postcode = "488900"
postcode = undefined


  return <div className="lesson05-wrapper">TypeScript</div>;
}

export default Lesson05;
