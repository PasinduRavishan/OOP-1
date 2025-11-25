# 📚 TypeScript Library Management System (Advanced OOP)

This project is a comprehensive Library Management System implemented using **Object-Oriented Programming (OOP)** principles and **SOLID design patterns** in **TypeScript**.  
It is developed as part of the *Coder Catalyst OOP Training - Assignment 1*.

---


## 📁 Project Structure

```
src/
  models/
    LibraryItem.ts      (Abstract base class)
    Book.ts             (Extends LibraryItem)
    AudioBook.ts        (Extends LibraryItem)
    User.ts
    LibraryCatalogue.ts (Singleton pattern)
  index.ts
```

---

## 🧩 Class Overview

| Class | Responsibility | OOP Concepts |
|------|----------------|--------------|
| `LibraryItem` | Abstract base class defining common structure for all library items | **Abstraction**, **Inheritance** |
| `Book` | Represents a physical book with author and ISBN | **Inheritance**, **Polymorphism** (overrides display()) |
| `AudioBook` | Represents an audiobook with narrator and length | **Inheritance**, **Polymorphism** (overrides display()) |
| `User` | Represents a library user with private fields | **Encapsulation** (private fields, public getters/setters) |
| `LibraryCatalogue` | Manages collection of library items (Singleton) | **Design Pattern** (Singleton), **Dependency Inversion** |

---

## 🎯 OOP Principles Demonstrated

### 1. **Abstraction**
- `LibraryItem` is an abstract class that defines the common structure
- Abstract `display()` method ensures all subclasses implement their own version

### 2. **Inheritance**
- `Book` and `AudioBook` both extend `LibraryItem`
- Reuse common properties (id, title) from the parent class

### 3. **Polymorphism**
- Both `Book` and `AudioBook` override the `display()` method with their own implementations
- Catalogue can work with any `LibraryItem` type

### 4. **Encapsulation**
- Private fields in `User` class
- Public getters and setters for controlled access
- Private constructor in `LibraryCatalogue` (Singleton pattern)

### 5. **SOLID Principles**
- **S (Single Responsibility)**: Each class has one clear purpose
- **O (Open/Closed)**: Can extend with new item types without modifying existing code
- **D (Dependency Inversion)**: Catalogue depends on abstraction (`LibraryItem`), not concrete classes

### 6. **Design Patterns**
- **Singleton Pattern**: `LibraryCatalogue.getInstance()` ensures only one catalogue exists

---

## ⚙️ How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the project:
   ```bash
   npm run start
   ```

Since `--watch` is enabled, the program will auto-reload when files are updated.

---

## ✅ Sample Output

```
Added: "OOP Concepts" to the catalogue.
Added: "The Programmer" to the catalogue.
Added: "JS Basics" to the catalogue.
Added: "Learn TypeScript" to the catalogue.
=== Library Catalogue ===
------ Book Details ------
ID     : 1
Title of the Book : OOP Concepts
Author : M.G. Martin
ISBN No : 001
--------------------------
------ Book Details ------
ID     : 2
Title of the Book : The Programmer
Author : Thomas Hunt
ISBN No : 002
--------------------------
------ Book Details ------
ID     : 3
Title of the Book : JS Basics
Author : David Cameron
ISBN No : 003
--------------------------
------ AudioBook Details ------
ID     : 4
Title of the AudioBook : Learn TypeScript
Narrator : John Smith
Length (mins) : 120
-------------------------------
Ravishan borrowed "The Programmer".
Ravishan is managing the library.
```

---

## ✅ Features Completed

- ✔ **Abstract base class** `LibraryItem` with abstract methods
- ✔ **Inheritance hierarchy**: `Book` and `AudioBook` extend `LibraryItem`
- ✔ **Polymorphism**: Different `display()` implementations for each item type
- ✔ **Encapsulation**: Private fields with public getters/setters in `User`
- ✔ **Singleton pattern**: `LibraryCatalogue` ensures single instance
- ✔ **SOLID principles** applied throughout the codebase
- ✔ **Type safety** with TypeScript interfaces and abstract classes
- ✔ Supports multiple library item types (Books, AudioBooks)
- ✔ Runs without errors using TypeScript


