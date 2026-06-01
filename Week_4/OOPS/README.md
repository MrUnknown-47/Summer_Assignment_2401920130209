# Week 4 – OOPS Assignment: Interfaces, Inner Classes, & Inheritance for E-Commerce System

## Assignment Objective
**Practice complex systems composition: Inheritance, static and non-static Inner classes, Multiple Interfaces.**

---

## Problem Description
Create an E-Commerce backbone representing users, shopping carts, checkout logic, and details logs.


### Core Requirements:
1. **Abstract Class `User`**:
   - Fields: `userId`, `name`, `email`.
   - Subclasses: `Customer` (with dynamic cart access) and `Admin` (with product catalog editing privileges).
2. **Interfaces**:
   - `PaymentGateway`: `boolean processPayment(double amount)`
   - `OrderManager`: `void placeOrder(Customer customer, double amount)`
3. **Inner Classes Structure**:
   - Inside `Customer`, define a non-static inner class `ShoppingCart` to store items (`Map<String, Integer>`) and compute total prices.
   - Inside `OrderManager`, define a static inner class `OrderDetails` to track order tracking IDs, items ordered, and transaction status.
4. **Execution/Testing**:
   - Demonstrate logging in, adding items to a cart, checking out via an implemented payment interface, and printing receipt details.


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