// 🚀 Part 1: Variables + Conditionals
let userName = "Student";
let age = 18;

if (age >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is not an adult.");
}

// 🚀 Part 2: Functions
function greet(name) {
  return "Hello, " + name + "!";
}

function addNumbers(a, b) {
  return a + b;
}

// 🚀 Part 3: Loops
let items = ["Apple", "Banana", "Mango"];
let list = document.getElementById("list");
for (let i = 0; i < items.length; i++) {
  let li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}

// 🚀 Part 4: DOM Manipulation
document.getElementById("greetBtn").addEventListener("click", function() {
  document.getElementById("greeting").textContent = greet(userName);
});

document.getElementById("addBtn").addEventListener("click", function() {
  let n1 = parseFloat(document.getElementById("num1").value) || 0;
  let n2 = parseFloat(document.getElementById("num2").value) || 0;
  document.getElementById("result").textContent = "Result: " + addNumbers(n1, n2);
});

document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});
