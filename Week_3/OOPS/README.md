# Week 3 – OOPS Assignment: Abstract Class & Polymorphism for Vehicle Rental System

## Assignment Objective
**Practice Class Inheritance, Abstract Classes, Method Overriding, and Dynamic Binding.**

---

## Problem Description
Develop a system containing specialized vehicles available for renting. Establish an inheritance model where specialized cost evaluations occur based on custom metrics.


### Core Requirements:
1. **Abstract Class `Vehicle`**:
   - Fields: `vehicleId`, `model`, `baseRatePerHour`.
   - Constructor to initialize fields.
   - Abstract method: `abstract double calculateRentalCost(int hours)`.
2. **Subclasses**:
   - `Car`: Adds `seatingCapacity` and charges 10% extra on calculated rates if capacity > 5.
   - `Bike`: Implements direct rate calculation with no additional fees.
   - `Truck`: Adds `loadCapacity` (in tons) and charges an additional $50 handling fee.
3. **Execution/Testing**:
   - Write a main program showing polymorphic list traversal (`List<Vehicle>`), adding different vehicles, and calculating cost for each vehicle given a duration of hours.


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