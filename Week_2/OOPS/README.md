# Week 2 – OOPS Assignment: Playable Interface and Music Streaming App

## Assignment Objective
**Practice dynamic polymorphism, interface hierarchies, and clean decoupling.**

---

## Problem Description
Develop a multimedia media manager simulating a streaming service. Items like songs and podcasts execute custom actions when controlled via a centralized dashboard.


### Core Requirements:
1. **Interface `Playable`**:
   - `void play()`
   - `void pause()`
   - `void stop()`
2. **Implementing Classes**:
   - `Song`: Fields for `title`, `artist`, `duration`. Implements custom prints for `play`, `pause`, `stop`.
   - `Podcast`: Fields for `episodeTitle`, `host`, `episodeNumber`. Implements unique audio-streaming text logs.
   - `Video`: Fields for `videoTitle`, `resolution`, `creator`. Implements video-rendering text representations.
3. **Class `Playlist`**:
   - Holds a list of `Playable` items.
   - Implement methods to add items, display the playlist, and `playAll()` which cycles through items calling their `play()` methods polymorphically.


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