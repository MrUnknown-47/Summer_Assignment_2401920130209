# Week 1 – OOPS Assignment: Library User Account Registration & Book Request Validator

## Assignment Objective
**Practice Class Interfaces, Inheritance, Encapsulation, Conditional Validations, and Driver Testing.**

---

## Problem Description
Develop an interface called `LibraryUser` and its implementations `KidUsers` and `AdultUser` to validate account registration and book borrowing lengths based on ages and category restrictions.


### Core Requirements:
1. **Interface `LibraryUser`**:
   - Declares methods: `void registerAccount()` and `void requestBook()`.
2. **Encapsulated Class `KidUsers`**:
   - Implements `LibraryUser`.
   - Fields: `int age`, `String bookType`.
   - Logic:
     - `registerAccount()`: If age < 12, print `"You have successfully registered under a Kids Account"`. If age >= 12 (or age > 12 as per specs), print `"Sorry, Age must be less than 12 to register as a kid"`.
     - `requestBook()`: If bookType is `"Kids"`, print `"Book Issued successfully, please return the book within 10 days"`. Else, print `"Oops, you are allowed to take only kids books"`.
3. **Encapsulated Class `AdultUser`**:
   - Implements `LibraryUser`.
   - Fields: `int age`, `String bookType`.
   - Logic:
     - `registerAccount()`: If age > 12, print `"You have successfully registered under an Adult Account"`. If age <= 12 (or age < 12 as per specs), print `"Sorry, Age must be greater than 12 to register as an adult"`.
     - `requestBook()`: If bookType is `"Fiction"`, print `"Book Issued successfully, please return the book within 7 days"`. Else, print `"Oops, you are allowed to take only adult Fiction books"`.
4. **Driver Class `LibraryInterfaceDemo.java`**:
   - Contains `main()` method executing:
     - **Test Case #1**: KidUser with Age = 10, 18. BookType = "Kids", "Fiction".
     - **Test Case #2**: AdultUser with Age = 5, 23. BookType = "Kids", "Fiction".


---

## Solution Code Templates

### 1. Java Structural Layout
Create a source file (e.g., solution source files) and use the following layout:

```java
// Paste your Java OOP structural code here
```

### 2. C++ Structural Layout
Create a C++ source file and use the following layout:

```cpp
// Paste your C++ OOP structural code here
```

---

## Verification & Execution Checks
List the output or steps used to verify your OOPS model:
- [ ] Compiles successfully without warnings.
- [ ] Demonstrates requested class structures and methods.
- [ ] Standard print statements show correct log outputs.