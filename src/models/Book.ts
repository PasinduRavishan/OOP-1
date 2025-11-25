/**
 * BOOK CLASS
 * Demonstrates Inheritance (extends LibraryItem) and Polymorphism (overrides display()).
 * 
 * SOLID Principle:
 * - O (Open/Closed): This class can be extended without modifying the base.
 */

import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem {
  private author: string;
  private ISBN : string;


  // Constructor methon
  constructor(id: number, title: string, author: string, ISBN: string) {
    super(id, title);
    this.author = author;
    this.ISBN = ISBN;

  }



  // Display method override
  public display(): void {
  console.log("------ Book Details ------");
  console.log(`ID     : ${this.getId()}`);
  console.log(`Title of the Book : ${this.getTitle()}`);
  console.log(`Author : ${this.author}`);
  console.log(`ISBN No : ${this.ISBN}`);
  console.log("--------------------------");
 }



}
