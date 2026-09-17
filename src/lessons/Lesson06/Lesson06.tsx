import "./styles.css";

function Lesson06() {
  // Типизация объектов через interface
  interface Address {
    city: string;
    postcode: string | number | null;
  }

  const address1: Address = {
    city: "Paris",
    postcode: 134555,
    street: "Main 5/7",
  };

  const address2: Address = {
    city: "Berlin",
    postcode: null,
  };

  // Мы можем создавать одноименные интерфейсы, при этом у нас
  // будет не новый интерфейс, а дополнение старого с таким же названием
  interface Address {
    street?: string;
  }

  //   Наследование интерфейсов
  interface Person {
    fullName: string;
    email: string;
  }

  interface Admin extends Person {
    adminId: number;
  }

  const personData: Person = {
    fullName: "Adam Smith",
    email: "adam@gmail.com",
  };

  const adminData: Admin = {
    fullName: "John Johnson",
    email: "john@gmail.com",
    adminId: 3289999,
  };

  //   Типизация через type
  //   Использование type для создания усложнённого типа переменных
  type Weight = string | number | null;
  let userWeight: Weight = "56kg";
  let petWeight: Weight = null;
  userWeight = 56;

  //   Использование type для типизации объекта
  type Animal = {
    name: string;
    weight: Weight;
  };

  const animalData: Animal = {
    weight: 200,
    name: "Lion",
  };

  //   Создание одноименного типа - !приведет к ошибке
  //   type Animal = { country: string };

  //   Объединение типов
  type ZooAnimal = Animal & { country: string };

  const zebra: ZooAnimal = {
    name: "Zebra",
    weight: null,
    country: "Berlin",
  };

  //   Generic - дженерик это переменная, в которую мы можем подставить нужный
  // тип в момент использования
  type CustomTupel<T = string> = [number, string, T];
  const arrayMix1: CustomTupel<boolean> = [24, "Tom", true];
  const arrayMix2: CustomTupel<number> = [25, "Mary", 1];
  const arrayMix3: CustomTupel = [16, "Bob", "Smith"];

  //   Genric and Interface
  interface Fruit<T = number> {
    title: string;
    address: T;
  }

  const fruit1: Fruit = {
    title: "Apple",
    address: 488990,
  };

  const fruit2: Fruit<string> = {
    title: "Apple",
    address: "88990",
  };

  //enum - перечисление, позволяет ограничить значения
  // Числовое перечисление
  enum Colors {
    Red = 5, //0
    Black, //1
    Green, //2
  }

  let currentColor: Colors = Colors.Green;
  console.log(currentColor);

  //   /////////
  enum TRAFFIC_LIGHT {
    RED = "red",
    YELLOW = "yellow",
    GREEN = "green",
  }

  const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return "Стоп!";
      case TRAFFIC_LIGHT.YELLOW:
        return "Приготовьтесь идти!";
      case TRAFFIC_LIGHT.GREEN:
        return "Можно идти!";
    }
  };
  

  return <div className="lesson06-wrapper">{getAction(TRAFFIC_LIGHT.GREEN)}</div>;
}

export default Lesson06;
