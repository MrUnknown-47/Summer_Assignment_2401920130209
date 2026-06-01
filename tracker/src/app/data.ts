export interface Problem {
  id: string;
  no: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  url: string;
  description: string;
}

export interface Day {
  day_no: number;
  topic: string;
  problems: Problem[];
}

export interface OopsAssignment {
  title: string;
  objective: string;
  description: string;
  specs: string;
}

export interface Week {
  week_no: number;
  theme: string;
  description: string;
  oops: OopsAssignment;
  days: Day[];
}

export const weeksData: Week[] = [
  {
    week_no: 1,
    theme: "Arrays + Basic Strings",
    description: "Build confidence in basic array manipulations, prefix sum patterns, sliding window mechanics, two-pointer traversals, and matrix transformations.",
    oops: {
      title: "Library User Account Registration & Book Request Validator",
      objective: "Practice Class Interfaces, Inheritance, Encapsulation, Conditional Validations, and Driver Testing.",
      description: "Develop an interface called `LibraryUser` and its implementations `KidUsers` and `AdultUser` to validate account registration and book borrowing lengths based on age and category restrictions.",
      specs: "1. Create interface LibraryUser with void registerAccount() and void requestBook().\n2. Create KidUsers (age, bookType): If age < 12, register Kids Account, else show error. If bookType is \"Kids\", issue book for 10 days, else show error.\n3. Create AdultUser (age, bookType): If age > 12, register Adult Account, else show error. If bookType is \"Fiction\", issue book for 7 days, else show error.\n4. Demonstrate using LibraryInterfaceDemo class with Age (10, 18, 5, 23) and BookType (\"Kids\", \"Fiction\") test cases."
    },
    days: [
      {
        day_no: 1,
        topic: "Array Basics",
        problems: [
          {
            id: "w1d1p1",
            no: 1,
            title: "Two Sum",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/two-sum/",
            description: "Find if two numbers in an array sum to a specific target. Return their indices."
          },
          {
            id: "w1d1p2",
            no: 26,
            title: "Remove Duplicates from Sorted Array",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
            description: "Remove duplicates in-place from a sorted array and return the new length."
          },
          {
            id: "w1d1p3",
            no: 121,
            title: "Best Time to Buy and Sell Stock",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
            description: "Maximize stock trading profit by buying on one day and selling on another."
          }
        ]
      },
      {
        day_no: 2,
        topic: "Prefix Sum / Sliding Window",
        problems: [
          {
            id: "w1d2p1",
            no: 53,
            title: "Maximum Subarray",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/maximum-subarray/",
            description: "Find the contiguous subarray with the largest sum."
          },
          {
            id: "w1d2p2",
            no: 217,
            title: "Contains Duplicate",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/contains-duplicate/",
            description: "Check if any value appears at least twice in an integer array."
          },
          {
            id: "w1d2p3",
            no: 643,
            title: "Maximum Average Subarray I",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/maximum-average-subarray-i/",
            description: "Find a contiguous subarray of size k with the maximum average value."
          }
        ]
      },
      {
        day_no: 3,
        topic: "Two Pointer",
        problems: [
          {
            id: "w1d3p1",
            no: 283,
            title: "Move Zeroes",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/move-zeroes/",
            description: "Move all 0s in an array to the end in-place while keeping relative order of elements."
          },
          {
            id: "w1d3p2",
            no: 977,
            title: "Squares of a Sorted Array",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
            description: "Return an array of the squares of each number sorted in non-decreasing order."
          },
          {
            id: "w1d3p3",
            no: 11,
            title: "Container With Most Water",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/container-with-most-water/",
            description: "Find two lines that form a container holding the maximum volume of water."
          }
        ]
      },
      {
        day_no: 4,
        topic: "Matrix Problems",
        problems: [
          {
            id: "w1d4p1",
            no: 1572,
            title: "Matrix Diagonal Sum",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/matrix-diagonal-sum/",
            description: "Find the sum of primary and secondary diagonals of a square matrix."
          },
          {
            id: "w1d4p2",
            no: 566,
            title: "Reshape the Matrix",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/reshape-the-matrix/",
            description: "Reshape an m x n matrix into a new r x c matrix if possible."
          },
          {
            id: "w1d4p3",
            no: 54,
            title: "Spiral Matrix",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/spiral-matrix/",
            description: "Return all elements of an m x n matrix in spiral order."
          }
        ]
      },
      {
        day_no: 5,
        topic: "String Basics",
        problems: [
          {
            id: "w1d5p1",
            no: 125,
            title: "Valid Palindrome",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/valid-palindrome/",
            description: "Verify if a string is a palindrome ignoring non-alphanumeric characters."
          },
          {
            id: "w1d5p2",
            no: 344,
            title: "Reverse String",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/reverse-string/",
            description: "Reverse a given character array in-place."
          },
          {
            id: "w1d5p3",
            no: 14,
            title: "Longest Common Prefix",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/longest-common-prefix/",
            description: "Find the longest common prefix string amongst an array of strings."
          }
        ]
      }
    ]
  },
  {
    week_no: 2,
    theme: "Strings (Advanced)",
    description: "Master string hashing properties, advanced sliding window substrings, pattern searches, and string recursive generators.",
    oops: {
      title: "Playable Instrument Interface & Package Hierarchies",
      objective: "Practice Java Packages structure, interface implementation across namespaces, and multiple source files testing.",
      description: "Establish a packages hierarchy representing dynamic musical instruments using a mutual interface.",
      specs: "1. Create interface Playable with void play() in package music.\n2. Create Veena implementing Playable in package music.string.\n3. Create Saxophone implementing Playable in package music.wind.\n4. Create Test in package live to instantiate Veena, Saxophone, assign to Playable interface reference, and execute play() polymorphically."
    },
    days: [
      {
        day_no: 1,
        topic: "Hashing in Strings",
        problems: [
          {
            id: "w2d1p1",
            no: 242,
            title: "Valid Anagram",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/valid-anagram/",
            description: "Determine if two strings are anagrams of each other."
          },
          {
            id: "w2d1p2",
            no: 387,
            title: "First Unique Character in a String",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
            description: "Find the first non-repeating character in a string and return its index."
          },
          {
            id: "w2d1p3",
            no: 383,
            title: "Ransom Note",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/ransom-note/",
            description: "Check if a ransom note string can be constructed from a given magazine string."
          }
        ]
      },
      {
        day_no: 2,
        topic: "Sliding Window on Strings",
        problems: [
          {
            id: "w2d2p1",
            no: 3,
            title: "Longest Substring Without Repeating Characters",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
            description: "Compute the length of the longest substring without duplicate characters."
          },
          {
            id: "w2d2p2",
            no: 567,
            title: "Permutation in String",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/permutation-in-string/",
            description: "Determine if a permutation of s1 exists as a substring in s2."
          },
          {
            id: "w2d2p3",
            no: 438,
            title: "Find All Anagrams in a String",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
            description: "Find all starting indices of p's anagrams in s."
          }
        ]
      },
      {
        day_no: 3,
        topic: "Pattern Matching",
        problems: [
          {
            id: "w2d3p1",
            no: 28,
            title: "Implement strStr()",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
            description: "Return the index of the first occurrence of needle in haystack."
          },
          {
            id: "w2d3p2",
            no: 392,
            title: "Is Subsequence",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/is-subsequence/",
            description: "Determine if a string is a subsequence of another."
          },
          {
            id: "w2d3p3",
            no: 459,
            title: "Repeated Substring Pattern",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/repeated-substring-pattern/",
            description: "Check if a string can be constructed by repeating a substring of it multiple times."
          }
        ]
      },
      {
        day_no: 4,
        topic: "Recursion + Strings",
        problems: [
          {
            id: "w2d4p1",
            no: 557,
            title: "Reverse Words in a String III",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/reverse-words-in-a-string-iii/",
            description: "Reverse the character order of each word in a sentence while keeping spaces."
          },
          {
            id: "w2d4p2",
            no: 394,
            title: "Decode String",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/decode-string/",
            description: "Decode an encoded string formatted as k[encoded_string]."
          },
          {
            id: "w2d4p3",
            no: 22,
            title: "Generate Parentheses",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/generate-parentheses/",
            description: "Generate all combinations of well-formed parentheses for n pairs."
          }
        ]
      },
      {
        day_no: 5,
        topic: "Mixed String Problems",
        problems: [
          {
            id: "w2d5p1",
            no: 49,
            title: "Group Anagrams",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/group-anagrams/",
            description: "Group an array of strings by their anagram equivalence classes."
          },
          {
            id: "w2d5p2",
            no: 443,
            title: "String Compression",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/string-compression/",
            description: "Compress an array of characters in-place using count counts."
          },
          {
            id: "w2d5p3",
            no: 5,
            title: "Longest Palindromic Substring",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/longest-palindromic-substring/",
            description: "Find the longest contiguous palindromic substring in a string."
          }
        ]
      }
    ]
  },
  {
    week_no: 3,
    theme: "Linked List + Stack + Queue",
    description: "Explore linear data structures: Linked Lists traversals, Stacks for parsing and expressions, and Queues/Deques for sliding intervals.",
    oops: {
      title: "Abstract Class Compartment & Railway Coach Notice Simulator",
      objective: "Practice Abstract Classes, Abstract Methods, Polymorphic Array Traversals, and Subclass Overriding.",
      description: "Design an abstract base class `Compartment` and subclasses representing specialized coaches. Demonstrate polymorphism by creating random coach layouts and fetching their notices.",
      specs: "1. Create abstract base class Compartment with abstract method public String notice().\n2. Create subclasses FirstClass, Ladies, General, Luggage that extend Compartment and override notice() with custom string alerts.\n3. Create TestCompartment with main() which instantiates a Compartment array of size 10, populates it randomly with subclasses, and verifies notice() polymorphic execution."
    },
    days: [
      {
        day_no: 1,
        topic: "Linked List (Part A)",
        problems: [
          {
            id: "w3d1p1",
            no: 141,
            title: "Linked List Cycle",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/linked-list-cycle/",
            description: "Determine if a linked list contains a loop cycle."
          },
          {
            id: "w3d1p2",
            no: 206,
            title: "Reverse Linked List",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/reverse-linked-list/",
            description: "Reverse a singly linked list in-place."
          },
          {
            id: "w3d1p3",
            no: 876,
            title: "Middle of the Linked List",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/middle-of-the-linked-list/",
            description: "Find and return the middle node of a linked list."
          }
        ]
      },
      {
        day_no: 2,
        topic: "Linked List (Part A - Continued)",
        problems: [
          {
            id: "w3d2p1",
            no: 21,
            title: "Merge Two Sorted Lists",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/merge-two-sorted-lists/",
            description: "Merge two sorted lists and return the sorted merged list."
          },
          {
            id: "w3d2p2",
            no: 19,
            title: "Remove Nth Node From End of List",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
            description: "Remove the nth node from the end of the list and return its head."
          },
          {
            id: "w3d2p3",
            no: 234,
            title: "Palindrome Linked List",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/palindrome-linked-list/",
            description: "Check if a singly linked list is a palindrome."
          }
        ]
      },
      {
        day_no: 3,
        topic: "Stack (Part B)",
        problems: [
          {
            id: "w3d3p1",
            no: 20,
            title: "Valid Parentheses",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/valid-parentheses/",
            description: "Verify matching brackets in an expression using a stack."
          },
          {
            id: "w3d3p2",
            no: 155,
            title: "Min Stack",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/min-stack/",
            description: "Design a stack that returns its minimum element in O(1) time."
          },
          {
            id: "w3d3p3",
            no: 496,
            title: "Next Greater Element I",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/next-greater-element-i/",
            description: "Find the next greater element for each array element relative to its subset."
          }
        ]
      },
      {
        day_no: 4,
        topic: "Stack (Part B - Continued)",
        problems: [
          {
            id: "w3d4p1",
            no: 739,
            title: "Daily Temperatures",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/daily-temperatures/",
            description: "Calculate how many days to wait for a warmer temperature."
          },
          {
            id: "w3d4p2",
            no: 150,
            title: "Evaluate Reverse Polish Notation",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
            description: "Evaluate arithmetic expression in Postfix/Reverse Polish Notation."
          },
          {
            id: "w3d4p3",
            no: 84,
            title: "Largest Rectangle in Histogram",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
            description: "Find the area of the largest rectangle in a histogram."
          }
        ]
      },
      {
        day_no: 5,
        topic: "Queue / Deque (Part C)",
        problems: [
          {
            id: "w3d5p1",
            no: 232,
            title: "Implement Queue using Stacks",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/implement-queue-using-stacks/",
            description: "Implement a FIFO queue using only two stacks."
          },
          {
            id: "w3d5p2",
            no: 933,
            title: "Number of Recent Calls",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/number-of-recent-calls/",
            description: "Count recent requests within a sliding window of time."
          },
          {
            id: "w3d5p3",
            no: 239,
            title: "Sliding Window Maximum",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/sliding-window-maximum/",
            description: "Find the maximum element inside each sliding window of size k."
          }
        ]
      }
    ]
  },
  {
    week_no: 4,
    theme: "Trees",
    description: "Explore recursive structures with Binary Trees, height checks, level-order traversals, validation of BST invariants, and serialized node structures.",
    oops: {
      title: "Four OOP Principles & Features Mini-Projects",
      objective: "Practice nested classes, geometric classes design, class inheritance patterns, and interface integration.",
      description: "Develop four independent mini-modules reinforcing distinct OOPS syntax behaviors.",
      specs: "1. Square Interface: Interface test with method square(int), class arithmetic implementing it, driver ToTestInt.\n2. Nested Class: Outer class with display(), inner class inner with display(), main to invoke both.\n3. Point: Point class with variables private x, y, constructors, and setX, setY, setXY.\n4. Box & Box3D: Base class box, subclass box3d. Set dimensions length, breadth, height. Compute Area and Volume."
    },
    days: [
      {
        day_no: 1,
        topic: "Binary Tree Basics",
        problems: [
          {
            id: "w4d1p1",
            no: 104,
            title: "Maximum Depth of Binary Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
            description: "Find the length of the longest path from root to leaf."
          },
          {
            id: "w4d1p2",
            no: 226,
            title: "Invert Binary Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/invert-binary-tree/",
            description: "Invert a binary tree (mirror image)."
          },
          {
            id: "w4d1p3",
            no: 100,
            title: "Same Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/same-tree/",
            description: "Check if two binary trees are identical structurally and value-wise."
          }
        ]
      },
      {
        day_no: 2,
        topic: "Traversals",
        problems: [
          {
            id: "w4d2p1",
            no: 94,
            title: "Binary Tree Inorder Traversal",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
            description: "Return inorder traversal of binary tree's values."
          },
          {
            id: "w4d2p2",
            no: 102,
            title: "Binary Tree Level Order Traversal",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
            description: "Perform BFS tree traversal level by level."
          },
          {
            id: "w4d2p3",
            no: 103,
            title: "Binary Tree Zigzag Level Order Traversal",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
            description: "Traverse level order but alternating left-to-right/right-to-left directions."
          }
        ]
      },
      {
        day_no: 3,
        topic: "Binary Search Tree",
        problems: [
          {
            id: "w4d3p1",
            no: 700,
            title: "Search in a Binary Search Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
            description: "Find the node in BST whose value matches query."
          },
          {
            id: "w4d3p2",
            no: 98,
            title: "Validate Binary Search Tree",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/validate-binary-search-tree/",
            description: "Validate that a tree conforms to the BST invariants."
          },
          {
            id: "w4d3p3",
            no: 235,
            title: "Lowest Common Ancestor of a BST",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
            description: "Find the lowest common ancestor node of two given nodes in BST."
          }
        ]
      },
      {
        day_no: 4,
        topic: "Path Based Problems",
        problems: [
          {
            id: "w4d4p1",
            no: 112,
            title: "Path Sum",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/path-sum/",
            description: "Verify if there is a root-to-leaf path summing to target."
          },
          {
            id: "w4d4p2",
            no: 543,
            title: "Diameter of Binary Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/diameter-of-binary-tree/",
            description: "Compute length of the longest path between any two nodes in a tree."
          },
          {
            id: "w4d4p3",
            no: 124,
            title: "Binary Tree Maximum Path Sum",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
            description: "Find maximum path sum of any connecting node sequence."
          }
        ]
      },
      {
        day_no: 5,
        topic: "Advanced Trees",
        problems: [
          {
            id: "w4d5p1",
            no: 101,
            title: "Symmetric Tree",
            difficulty: "Easy",
            url: "https://leetcode.com/problems/symmetric-tree/",
            description: "Check if a binary tree is a mirror image of itself."
          },
          {
            id: "w4d5p2",
            no: 105,
            title: "Construct Binary Tree from Preorder and Inorder Traversal",
            difficulty: "Medium",
            url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
            description: "Reconstruct binary tree from pre- and in-order arrays."
          },
          {
            id: "w4d5p3",
            no: 297,
            title: "Serialize and Deserialize Binary Tree",
            difficulty: "Hard",
            url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
            description: "Design dynamic string format serializer and parser for trees."
          }
        ]
      }
    ]
  }
];
