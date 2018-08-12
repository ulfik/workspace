class MyAnimals { 
  constructor(name){//zamiast funkcji konstruktora
    this.name = name;
    this.type = "My animals";
  }
  pooping(){
    console.log("How dangerous is a " + this.name + " poop?");
  }
  feed(){
    console.log("You should feed your " + this.name + " you filthy man!");
  }
}

const ptaszek = new MyAnimals("Ptaszek Bobek");
ptaszek.pooping();
ptaszek.feed();

class Snake extends MyAnimals { // extends - dana klasa rozszerza inną
  constructor(name, lastName){ // nie piszemy konstruktora jeśli nie trzeba go rozszerzać o nowe argumenty
    super(name);//super zawsze na początku, dziedziczymy argument z klasy wyższej
    this.lastName = lastName;//dopiero potem nowy argument
    this.type = "snake";
  }
  hungry(){
    console.log(this.name + " " + this.lastName + " ate your " + ptaszek.name + "!") + this.feed(); 
  }
}

const wielkiWonsz = new Snake("Wąż Franciszek", "Zabłocki");
wielkiWonsz.hungry();
wielkiWonsz.feed();// dziedziczy metodę 