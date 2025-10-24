export class User {
  private name: string;
  private email: string;

  // Constructor method
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }


  // borrowBook method
  public borrowBook(bookTitle: string): void {
    console.log(`${this.name} borrowed "${bookTitle}".`);
  }


  // manageLibrary method
  public manageLibrary(): void {
    console.log(`${this.name} is managing the library.`);
  }


}
    