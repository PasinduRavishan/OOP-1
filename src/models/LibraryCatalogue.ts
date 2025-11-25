/**
 * LIBRARY CATALOGUE (Singleton Pattern)
 * Ensures only one instance of the catalogue exists.
 * 
 * SOLID Principles:
 * - S (Single Responsibility): Manages collection of library items.
 * - D (Dependency Inversion): Depends on abstraction (LibraryItem).
 */

import { LibraryItem } from "./LibraryItem";

export class LibraryCatalogue {
  private libraryItems: LibraryItem[] = [];
  private static instance: LibraryCatalogue;

  private constructor(){}

  public static getInstance():LibraryCatalogue {
    if (LibraryCatalogue.instance) {
      return LibraryCatalogue.instance;
    }
    else{
      LibraryCatalogue.instance = new LibraryCatalogue();
      return LibraryCatalogue.instance;
    }
  }

  // Method to add a book to the catalogue
  public addItem(item: LibraryItem): void {
    this.libraryItems.push(item);
    console.log(`Added: "${item.getTitle()}" to the catalogue.`);
  }

  
    // Method to display all books in the catalogue
  public displayItems(): void {
    if (this.libraryItems.length === 0) {
      console.log("Catalogue is empty.");
      return;
    }
    console.log("=== Library Catalogue ===");
    this.libraryItems.forEach((b) => b.display());
  }

  
  
}
