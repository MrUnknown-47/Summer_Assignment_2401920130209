# Week 1 – OOPS Assignment: Interface-Based Library Management System

## Assignment Objective
**Practice basic OOP principles: Abstraction, Encapsulation, and Interface implementation.**

---

## Problem Description
Design a system that manages books, members, and library transactions. The interface enforces modular operations, while proper encapsulation secures records.


### Core Requirements:
1. **Interface `ILibraryOperations`**:
   - `void borrowBook(String bookId, String memberId)`
   - `void returnBook(String bookId, String memberId)`
   - `boolean searchBook(String query)`
2. **Encapsulated Classes**:
   - `Book`: Fields for `bookId`, `title`, `author`, `isAvailable`.
   - `Member`: Fields for `memberId`, `name`, `borrowedBooksList`.
   - `Librarian`: Fields for `librarianId`, `name`, with capability to add new books to the library.
3. **Execution/Testing**:
   - Create a Main driver class demonstrating adding books, registering members, searching, borrowing, and returning books. Include exception handling (e.g., trying to borrow an unavailable book).


---

## Solution Code Templates

### 1. Java Structural Layout
Create a source file (e.g., `LibrarySystem.java`) and use the following structural layout to implement the assignment:

```java
// Define structures, interfaces, and testing drivers here
```

### 2. C++ Structural Layout
Create a source file (e.g., `library_system.cpp`) and use the following structural layout:

```cpp
// Define class structures, interfaces, and testing drivers here
```

---

## Verification & Execution Checks
List the output or steps used to verify your OOPS model:
- [ ] Compiles successfully without warnings.
- [ ] Demonstrates dynamic binding/polymorphism or structural layouts correctly.
- [ ] Standard print statements show correct log outputs.