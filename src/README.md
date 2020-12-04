States are triggered by the user when items are added to the cart. There is an
empty shopping cart list as a state and when an item is added to the cart,
the state is set to be the shopping cart having one (or however many) items.

Architeture wise, I set things as defined the GearUp slides:
App.js - contains the product list and passes it to FilteredList component
FilteredList.js - contains filtering/sorting/aggregator methods
DisplayList.js - maps each product from App.js to an HTML element or Component for render

Bugs: I have a bug where do to my use of splice(), the wrong item is delted when the user
clicks on remove. However, I tried SOOO many different ways to try to fix this
but each implementation resulted in the same thing or no items removing at all.
As a result, I'm sure that there is something happening where the thing clicked
on to be removed is actually the only thing not being removed because of how
the lists are updated but even why I tried to use a key speicifc to an item to
fix this issue, the bug is still there. There was a variety of ways I rewrote
the removeFromCart() method and none of them worked so I left the one that allowed
some functionality though it's not correct. 
