/**
 * AUDIOBOOK CLASS
 * Demonstrates Inheritance and Polymorphism.
 * 
 * SOLID Principle:
 * - O (Open/Closed): Another subclass without touching LibraryItem.
 */

import { LibraryItem } from "./LibraryItem";

export class AudioBook extends LibraryItem {

    private narrator: string;
    private length: number;

    // Constructor method
    constructor(id: number, title: string, narrator: string, length: number) {
        super(id, title);
        this.narrator = narrator;
        this.length = length;
    }
    // Display method override
    public display(): void {
        console.log("------ AudioBook Details ------");
        console.log(`ID     : ${this.getId()}`);
        console.log(`Title of the AudioBook : ${this.getTitle()}`);
        console.log(`Narrator : ${this.narrator}`);
        console.log(`Length (mins) : ${this.length}`);
        console.log("-------------------------------");
    }



}