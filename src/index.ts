import { Book } from "./models/Book";
import { User } from "./models/User";
import { LibraryCatalogue } from "./models/LibraryCatalogue";
import { AudioBook } from "./models/AudioBook";

function main() {
  // Creating a catalogue
  const catalogue = LibraryCatalogue.getInstance();

  // Creating some books
  const book1 = new Book(1, "OOP Concepts", "M.G. Martin", "001");
  const book2 = new Book(2, "The Programmer", "Thomas Hunt", "002");
  const book3 = new Book(3, "JS Basics", "David Cameron", "003");
  const audioBook1 = new AudioBook(4,"Learn TypeScript","John Smith",120);



  // Adding to catalogue
  catalogue.addItem(book1);
  catalogue.addItem(book2);
  catalogue.addItem(book3);
  catalogue.addItem(audioBook1);

  // Display catalogue
  catalogue.displayItems();

  
  // Creating a user & simulate a borrow
  const user1 = new User("Ravishan", "ravishan@gmail.com");
  user1.borrowBook(book2.getTitle());

    // Simulate library management
  user1.manageLibrary(); 
}

main();
