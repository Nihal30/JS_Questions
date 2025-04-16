// What is Event Delegation?

// Event Delegation is a technique in JavaScript where instead of attaching event listeners to each child element,
//  we attach a single event listener to their parent. This works because of event bubbling — an event starts from 
//  the target element and bubbles up to its parents.

// Why Use Event Delegation?
// Better performance: Fewer event listeners means less memory usage.
// Dynamic elements: It works even for elements added later dynamically.

<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

// ❌ Not recommended for many items
// document.querySelectorAll('#myList li').forEach(item => {
//     item.addEventListener('click', function () {
//       alert(this.textContent);
//     });
//   });

// ✅ Better way using event delegation
document.getElementById('myList').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
      alert(event.target.textContent);
    }
  });

// How It Works:

// You attach the click event listener to the ul (the parent).
// When any li inside it is clicked, the event bubbles up to the ul.
// Inside the event handler, event.target tells you which element was actually clicked.