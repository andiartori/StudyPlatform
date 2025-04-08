export const modules = [
	{
		id: 1,
		title: "Introduction to Programming",
		description: "Learn the basics of programming concepts and fundamentals",
		introduction:
			"# Welcome to Programming Basics\n\nIn this module, you'll learn the fundamental concepts of programming including variables, data types, and control structures. This foundation will prepare you for more advanced programming topics.\n\n## What you'll learn:\n- Basic programming concepts\n- Variables and data types\n- Control structures\n- Basic problem-solving",
		videoUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
		pdfUrl:
			"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
	},
	{
		id: 2,
		title: "Web Development Fundamentals",
		description: "Master the basics of HTML, CSS, and JavaScript",
		introduction:
			"# Web Development Fundamentals\n\nThis module covers the essential technologies that power the modern web. You'll learn how to create web pages using HTML, style them with CSS, and add interactivity with JavaScript.\n\n## Course Contents:\n- HTML5 basics\n- CSS styling\n- JavaScript fundamentals\n- Building responsive websites",
		videoUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
		pdfUrl:
			"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
	},
	{
		id: 3,
		title: "Data Structures",
		description: "Understanding fundamental data structures in programming",
		introduction:
			"# Data Structures\n\nLearn about different ways to organize and store data efficiently. This module covers arrays, linked lists, trees, and more.\n\n## Topics covered:\n- Arrays and Lists\n- Stacks and Queues\n- Trees and Graphs\n- Hash Tables",
		videoUrl: "https://www.youtube.com/watch?v=lTRiuFIWV54",
		pdfUrl:
			"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
	},
];

export const mockUsers = [
	{
		id: "user-1",
		email: "student1@example.com",
		password: "password123",
		name: "John Doe",
	},
	{
		id: "user-2",
		email: "student2@example.com",
		password: "password123",
		name: "Jane Smith",
	},
];

export const questions = [
	{
		id: 1,
		moduleId: 1,
		question: "What is a variable in programming?",
		options: [
			"A fixed value that never changes",
			"A container for storing data values",
			"A type of loop",
			"A mathematical equation",
		],
		correctAnswer: 1,
		explanation:
			"A variable is a container (storage area) for holding data. The value of a variable can be changed throughout the program.",
	},
	{
		id: 2,
		moduleId: 1,
		question: "Which of the following is a primitive data type?",
		options: ["Array", "Object", "String", "Function"],
		correctAnswer: 2,
		explanation:
			"String is a primitive data type in most programming languages, along with numbers, booleans, etc.",
	},
	{
		id: 3,
		moduleId: 1,
		question: "What is a conditional statement?",
		options: [
			"A way to store data",
			"A way to make decisions in code",
			"A type of variable",
			"A mathematical operation",
		],
		correctAnswer: 1,
		explanation:
			"Conditional statements are used to perform different actions based on different conditions.",
	},
	{
		id: 4,
		moduleId: 1,
		question: "What is a loop used for?",
		options: [
			"To store multiple values",
			"To make decisions",
			"To repeat code execution",
			"To define functions",
		],
		correctAnswer: 2,
		explanation:
			"Loops are used to execute a block of code multiple times based on a condition.",
	},
	{
		id: 5,
		moduleId: 1,
		question: "What is the purpose of comments in code?",
		options: [
			"To make the code run faster",
			"To execute special commands",
			"To document and explain the code",
			"To declare variables",
		],
		correctAnswer: 2,
		explanation:
			"Comments are used to explain code and make it more readable. They are ignored by the compiler/interpreter.",
	},
	{
		id: 6,
		moduleId: 1,
		question: "What is debugging?",
		options: [
			"Writing new code",
			"Finding and fixing errors in code",
			"Creating variables",
			"Running the program",
		],
		correctAnswer: 1,
		explanation:
			"Debugging is the process of finding and resolving defects or problems within a program.",
	},
	{
		id: 7,
		moduleId: 1,
		question: "What is an algorithm?",
		options: [
			"A programming language",
			"A type of variable",
			"A step-by-step procedure to solve a problem",
			"A computer program",
		],
		correctAnswer: 2,
		explanation:
			"An algorithm is a step-by-step procedure or formula for solving a problem.",
	},
	{
		id: 8,
		moduleId: 1,
		question: "What is the difference between = and == in programming?",
		options: [
			"They are the same",
			"= is for assignment, == is for comparison",
			"== is for assignment, = is for comparison",
			"Neither are used in programming",
		],
		correctAnswer: 1,
		explanation:
			"= is the assignment operator used to assign values, while == is the comparison operator used to compare values.",
	},
	{
		id: 9,
		moduleId: 1,
		question: "What is a function in programming?",
		options: [
			"A type of variable",
			"A mathematical equation",
			"A reusable block of code",
			"A data type",
		],
		correctAnswer: 2,
		explanation:
			"A function is a reusable block of code that performs a specific task.",
	},
	{
		id: 10,
		moduleId: 1,
		question: "What is the purpose of indentation in programming?",
		options: [
			"To make the code look pretty",
			"To improve code readability and structure",
			"To make the code run faster",
			"It has no purpose",
		],
		correctAnswer: 1,
		explanation:
			"Indentation is used to improve code readability and to show the structure of the code, especially in nested blocks.",
	},
	{
		id: 11,
		moduleId: 2,
		question: "What does HTML stand for?",
		options: [
			"Hyper Text Markup Language",
			"High Tech Modern Language",
			"Hyper Transfer Markup Logic",
			"Home Tool Markup Language",
		],
		correctAnswer: 0,
		explanation:
			"HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.",
	},
	{
		id: 12,
		moduleId: 2,
		question: "Which CSS property is used to change the text color?",
		options: ["text-style", "font-color", "color", "text-color"],
		correctAnswer: 2,
		explanation:
			"The 'color' property in CSS is used to set the color of text content.",
	},
	{
		id: 13,
		moduleId: 2,
		question: "What is the purpose of JavaScript?",
		options: [
			"To style web pages",
			"To create web page structure",
			"To add interactivity to web pages",
			"To store data",
		],
		correctAnswer: 2,
		explanation:
			"JavaScript is primarily used to add interactivity and dynamic behavior to web pages.",
	},
	{
		id: 14,
		moduleId: 2,
		question: "What is responsive web design?",
		options: [
			"Making websites load faster",
			"Making websites adapt to different screen sizes",
			"Making websites more secure",
			"Making websites more colorful",
		],
		correctAnswer: 1,
		explanation:
			"Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes.",
	},
	{
		id: 15,
		moduleId: 2,
		question: "What is the box model in CSS?",
		options: [
			"A 3D modeling tool",
			"A layout system for organizing content",
			"A JavaScript framework",
			"A type of HTML element",
		],
		correctAnswer: 1,
		explanation:
			"The CSS box model is a layout system that describes how elements are structured with margins, borders, padding, and content.",
	},
	{
		id: 16,
		moduleId: 2,
		question: "What is the purpose of the <head> tag in HTML?",
		options: [
			"To display headings",
			"To contain metadata about the document",
			"To create a header section",
			"To style text",
		],
		correctAnswer: 1,
		explanation:
			"The <head> tag contains metadata about the HTML document, including title, character set, styles, scripts, and other meta information.",
	},
	{
		id: 17,
		moduleId: 2,
		question: "What is a CSS selector?",
		options: [
			"A JavaScript function",
			"A pattern to select HTML elements to style",
			"A type of HTML tag",
			"A database query",
		],
		correctAnswer: 1,
		explanation:
			"CSS selectors are patterns used to select and style HTML elements on a web page.",
	},
	{
		id: 18,
		moduleId: 2,
		question: "What is the DOM?",
		options: [
			"A programming language",
			"A style sheet language",
			"A document structure representation",
			"A web browser",
		],
		correctAnswer: 2,
		explanation:
			"The Document Object Model (DOM) is a programming interface that represents the structure of HTML and XML documents as a tree-like hierarchy.",
	},
	{
		id: 19,
		moduleId: 2,
		question: "What is an event listener in JavaScript?",
		options: [
			"A CSS property",
			"A function that waits for user actions",
			"An HTML element",
			"A type of loop",
		],
		correctAnswer: 1,
		explanation:
			"An event listener is a function that waits for a specific event (like clicks or key presses) to occur and then executes code in response.",
	},
	{
		id: 20,
		moduleId: 2,
		question: "What is the purpose of media queries in CSS?",
		options: [
			"To play media files",
			"To create responsive designs",
			"To query databases",
			"To load images",
		],
		correctAnswer: 1,
		explanation:
			"Media queries are used in CSS to apply different styles based on device characteristics like screen size, making websites responsive.",
	},
	{
		id: 21,
		moduleId: 3,
		question: "What is an array?",
		options: [
			"A linked list implementation",
			"A collection of elements stored at contiguous memory locations",
			"A type of tree structure",
			"A hash table variant",
		],
		correctAnswer: 1,
		explanation:
			"An array is a data structure that stores elements in contiguous memory locations, allowing for direct access to any element using its index.",
	},
	{
		id: 22,
		moduleId: 3,
		question: "What is a stack data structure?",
		options: [
			"A random access data structure",
			"A LIFO (Last In First Out) data structure",
			"A FIFO (First In First Out) data structure",
			"A hierarchical data structure",
		],
		correctAnswer: 1,
		explanation:
			"A stack is a Last In First Out (LIFO) data structure where elements are added and removed from the same end.",
	},
	{
		id: 23,
		moduleId: 3,
		question: "What is a queue?",
		options: [
			"A LIFO data structure",
			"A random access structure",
			"A FIFO (First In First Out) data structure",
			"A binary tree variant",
		],
		correctAnswer: 2,
		explanation:
			"A queue is a First In First Out (FIFO) data structure where elements are added at one end and removed from the other end.",
	},
	{
		id: 24,
		moduleId: 3,
		question: "What is a linked list?",
		options: [
			"A continuous memory allocation structure",
			"A collection of nodes connected through references",
			"A type of array",
			"A sorting algorithm",
		],
		correctAnswer: 1,
		explanation:
			"A linked list is a data structure where elements (nodes) are connected through references, with each node containing data and a reference to the next node.",
	},
	{
		id: 25,
		moduleId: 3,
		question: "What is a binary tree?",
		options: [
			"A linear data structure",
			"A type of array",
			"A hierarchical structure with at most two children per node",
			"A hash table implementation",
		],
		correctAnswer: 2,
		explanation:
			"A binary tree is a hierarchical data structure where each node has at most two children, referred to as left and right child nodes.",
	},
	{
		id: 26,
		moduleId: 3,
		question: "What is a hash table?",
		options: [
			"A data structure that maps keys to values",
			"A type of tree",
			"A sorting algorithm",
			"A linked list variant",
		],
		correctAnswer: 0,
		explanation:
			"A hash table is a data structure that implements an associative array abstract data type, mapping keys to values using a hash function.",
	},
	{
		id: 27,
		moduleId: 3,
		question: "What is a graph data structure?",
		options: [
			"A linear data structure",
			"A collection of nodes and edges",
			"A type of array",
			"A sorting method",
		],
		correctAnswer: 1,
		explanation:
			"A graph is a non-linear data structure consisting of vertices (nodes) and edges that connect these vertices.",
	},
	{
		id: 28,
		moduleId: 3,
		question: "What is the time complexity of binary search?",
		options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
		correctAnswer: 1,
		explanation:
			"Binary search has a time complexity of O(log n) as it repeatedly divides the search interval in half.",
	},
	{
		id: 29,
		moduleId: 3,
		question: "What is a heap data structure?",
		options: [
			"A type of linked list",
			"A special complete binary tree",
			"A hash table variant",
			"A type of queue",
		],
		correctAnswer: 1,
		explanation:
			"A heap is a specialized tree-based data structure that satisfies the heap property, commonly used to implement priority queues.",
	},
	{
		id: 30,
		moduleId: 3,
		question: "What is the difference between BFS and DFS?",
		options: [
			"They are the same algorithm",
			"BFS uses a queue, DFS uses a stack",
			"BFS is faster than DFS",
			"DFS uses less memory than BFS",
		],
		correctAnswer: 1,
		explanation:
			"Breadth-First Search (BFS) uses a queue to explore nodes level by level, while Depth-First Search (DFS) uses a stack to explore as far as possible along each branch.",
	},
];

export const testResults = [
	{
		id: 1,
		userId: "user-1",
		moduleId: 1,
		score: 8,
		timeSpent: 1200,
		completed: true,
	},
];
