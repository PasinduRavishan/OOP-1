/**
 * ABSTRACT CLASS: LibraryItem
 * Demonstrates Abstraction and Inheritance.
 * 
 * Defines common structure for all library items.
 * Abstract method `display()` ensures subclasses must implement their own version.
 * 
 * SOLID Principle:
 * - S (Single Responsibility): This class only defines shared item properties.
 */

export abstract class LibraryItem {

private id: number;
private title: string;

public constructor(id:number, title:string){
    this.id = id;
    this.title = title;

}

public abstract display():void;

 // Getter for title
 public getTitle(): string {
   return this.title;
 }
 
 // Getter for id
 public getId(): number {
   return this.id;
 }

}