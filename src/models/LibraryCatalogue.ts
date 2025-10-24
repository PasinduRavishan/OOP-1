import { Book } from "./Book";

export class LibraryCatalogue {
  private libraryItems: Book[] = [];

  // Method to add a book to the catalogue
  public addItem(item: Book): void {
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
