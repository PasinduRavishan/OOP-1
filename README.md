# 📚 TypeScript Library Management System (Basic OOP)

This project is a simple Library Management System implemented using **Object-Oriented Programming (OOP)** concepts in **TypeScript**.  
It is developed as part of the *Coder Catalyst OOP Training - Assignment 1*.

---


## 📁 Project Structure

```
src/
models/
Book.ts
User.ts
LibraryCatalogue.ts
index.ts
```

---

## 🧩 Class Overview

| Class | Responsibility |
|------|----------------|
| `Book` | Represents a book with id, title, author, and ISBN |
| `User` | Represents a user of the library |
| `LibraryCatalogue` | Stores a list of Book objects and displays them |

The `User` can borrow a book (logged through console messages), and the `LibraryCatalogue` holds all the books.

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
=== Library Catalogue ===
------ Book Details ------
ID : 1
Title of the Book : OOP Concepts
Author : M.G. Martin
ISBN No : 001
------ Book Details ------
ID : 2
Title of the Book : The Programmer
Author : Thomas Hunt
ISBN No : 002
------ Book Details ------
ID : 3
Title of the Book : JS Basics
Author : David Cameron
ISBN No : 003
Ravishan borrowed "The Programmer".
Ravishan is managing the library.
```

---

## ✅ Features Completed

- ✔ `Book` class implemented with constructor & display method
- ✔ `User` class implemented with basic borrow method
- ✔ `LibraryCatalogue` class to store and display books
- ✔ Demonstrates OOP principles (classes, objects & relationships)
- ✔ Runs without errors using TypeScript

---
