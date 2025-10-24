export class Book {
  private id: number;
  private title: string;
  private author: string;
  private ISBN: string;


  // Constructor methon
  constructor(id: number, title: string, author: string, ISBN: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
  }



  // Display method
  public display(): void {
  console.log("------ Book Details ------");
  console.log(`ID     : ${this.id}`);
  console.log(`Title of the Book : ${this.title}`);
  console.log(`Author : ${this.author}`);
  console.log(`ISBN No : ${this.ISBN}`);
  console.log("--------------------------");
 }

 // Getter for title
 public getTitle(): string {
   return this.title;
 }

}
