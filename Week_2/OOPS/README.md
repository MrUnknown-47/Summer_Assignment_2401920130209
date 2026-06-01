# Week 2 – OOPS Assignment: Playable Instrument Interface & Package Hierarchies

## Assignment Objective
**Practice Java Packages structure, interface implementation across namespaces, and multiple source files testing.**

---

## Problem Description
Establish a packages hierarchy representing dynamic musical instruments using a mutual interface.


### Core Requirements:
1. **Interface `Playable`**:
   - Method: `void play();`
   - Package: `music`
2. **Class `Veena`**:
   - Implements `Playable` interface.
   - Package: `music.string`
3. **Class `Saxophone`**:
   - Implements `Playable` interface.
   - Package: `music.wind`
4. **Class `Test`**:
   - Package: `live`
   - Logic:
     - a. Create an instance of `Veena` and call `play()`
     - b. Create an instance of `Saxophone` and call `play()`
     - c. Place the above instances in a variable of type `Playable` and then call `play()`


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