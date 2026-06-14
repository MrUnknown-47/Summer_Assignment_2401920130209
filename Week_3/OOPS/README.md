# Week 3 – OOPS Assignment: Abstract Class Compartment & Railway Coach Notice Simulator

## Assignment Objective
**Practice Abstract Classes, Abstract Methods, Polymorphic Array Traversals, and Subclass Overriding.**

---

## Problem Description
Design an abstract base class `Compartment` and subclasses representing specialized coaches. Demonstrate polymorphism by creating random coach layouts and fetching their notices.


### Core Requirements:
1. **Abstract Class `Compartment`**:
   - Method: `public abstract String notice();`
2. **Subclasses**:
   - `FirstClass`, `Ladies`, `General`, `Luggage` each extending `Compartment`.
   - Override `notice()` in each subclass to return appropriate notification strings (e.g. `FirstClass`: "This is First Class. Ticket required.", `Ladies`: "Ladies Compartment. Men restricted.", etc.).
3. **Execution Class `TestCompartment`**:
   - `main()` method:
     - Declare an array of `Compartment` of size 10.
     - Fill each array slot with a randomly generated Compartment type (FirstClass, Ladies, General, or Luggage) determined by generating a random integer between 1 and 4.
     - Traverse the array and execute `notice()` on each slot to demonstrate dynamic polymorphism.


---

## Verification & Execution Checks
List the output or steps used to verify your OOPS model:
- [x] Compiles successfully without warnings.
- [x] Demonstrates requested class structures and methods.
- [x] Standard print statements show correct log outputs.