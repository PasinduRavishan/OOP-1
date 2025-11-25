/**
 * USER CLASS
 * Demonstrates Encapsulation through private fields and public getters/setters.
 * 
 * SOLID Principle:
 * - S (Single Responsibility): Manages only user-related behavior.
 */

export class User {
  private name: string;
  private email: string;

  // Constructor method
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(newEmail: string): void {
    this.email = newEmail;
  }

  public setName(newName: string): void {
    this.name = newName;
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
    