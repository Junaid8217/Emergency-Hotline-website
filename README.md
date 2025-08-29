### Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
--> getElementById select the only element with the given id. 
    getElementsByClassName select all elements with the given class. 
    querySelector Selects the first element that matches the CSS selector.
    querySelectorAll Selects all elements that matches the CSS selector.

### Q2: How do you create and insert a new element into the DOM?
--> Step 1: //Create child eliment
            const newChild = document.createElement('li')
            newChild.innerText = 'New list item'
    Step 2: //Get the parent where you will add the eliment. Let parent element has id:item-list
            const itemList = getElimentById('item-list')
    Step 3: //Append the child to the parent
            itemList.appendChild('newChild')

### Q3: What is Event Bubbling and how does it work?
--> Event bubbling is a browser mechanism where a DOM event triggered on a child element propagates or "bubbles up" through its ancestors (parent, grandparent, etc.) to the root of the document.

### Q4: What is Event Delegation in JavaScript? Why is it useful?
--> vent Delegation is a technique where you attach a single event listener to a parent element, instead of multiple listeners to each child element, and then determine which child triggered the event by checking the event.target.

### Q5: What is the difference between preventDefault() and stopPropagation() methods?
--> preventDefault(), prevents the default browser behavior for an event.stopPropagation(), stops the event from bubbling up (or capturing down) the DOM tree.
            
    
