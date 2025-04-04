# Shopping Cart app

Deployed link: https://shopping-cart57.netlify.app/
<br>
github-repo: https://github.com/Nampallyrohith/shopping-cart

## Features

- Display Products:
  Used the given PRODUCTS constant to render a list of products.
- Each product should have a quantity selector with + and - buttons and an "Add to Cart" button.
- Shopping Cart:
  Displayed the cart below the products.
  Allowed users to update product quantities in the cart.
  Allowed users to remove products from the cart.
- Free Gift Rule:
  If the cart subtotal reaches THRESHOLD (1000), added the FREE_GIFT product automatically.
  Showed a progress bar above the cart indicating how much more needs to be added before the free gift is unlocked.
  Ensured only one free gift is added, and it cannot be removed manually.
  Make sure the cart gift item is removed if the cart value goes below the Threshold value
- State Management:
  Used React’s built-in state management (useState, useEffect).
  Maintain separate states for products and cart.
- User Experience:
  Showed a message when the free gift is added.

## Tools

- Vite react
- tailwindCSS
