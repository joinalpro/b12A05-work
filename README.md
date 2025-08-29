# b12 Assignment 05 Work

# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer; getElementById get the id, getElemntsByClassName get the class name. querySelector only returns the first element. querySelectoryAll returns the NodeList and we use this to select element(CSS, ID) from the DOM.

# How do you create and insert a new element into the DOM?

We write createNewElement () and appendChild() to insert a new element into the DOM.

# What is Event Bubbling and how does it work?

When we clicked or triggerd an elemnt (ex; button)an event set for that element. Normally, event goes to the parent element that's why we call it event bubble.

# What is Event Delegation in JavaScript? Why is it useful?

Event delegation is used to handle multiple child elemnents; we just add one single event listener to the common element. To use this we write parentNode and children. we don't need to write event listener to the similar event again and again.

# What is the difference between preventDefault() and stopPropagation() methods?

With the preventDefault() we stopped auto refreshing in the browser. we write this with event interfaces. example: e.preventDefault(). With stopPropagation() this stop the parent element immediately.So, your event will no longer run.

#
