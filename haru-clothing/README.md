# Haru Clothing E-commerce 
---

### Project Details

**Haru Clothing Web App brief descriptions**
- Haru Clothing is an E-commerce website that sells men's, women's daily wears, sportwears, pajamas, top brands accessories and clothings.
- Haru Clothing provide secure payment systems and also 24/7 customer services and delivery services.
- Haru Clothing only sells 100% authentic products.

**Layout**
- mobile - 375px
- tablet - 560px
- desktop - 720px
---

**Key Points**
- I used
    - React **classnames** for joining and conditionally running the classNames
    - **React Router 6** along with **Data Layer APIs** for loaders, errorElements, etc.
    - **React icons** for easy to use icons.
    - and **Tailwind CSS** for styling
    - **MirageJS** to mock **RESTful APIs** and mocked endpoints for CRUD operations on product data.
    - **lazy and suspense** for **code splitting** and made **loading spinner** for fallback UI.
    - **localStorage API** for temporarily keeping the data for the cart then delete them after the user see the invoice.
- I made 
    - custom hooks and component library to prevent myself from "DRY".

- I decomposed everything into components and **compound components** for resuablity purpose to serve 'single responsibility principle' such as hero, banner, Product Cards, Blog Posts, page titles, etc and put them into different files for future maintainence.

- To maintain dynamic data rendering, I build JSON data, and fetch them from Api.js.
---

**Tasks**
- Every link press will get the users to relative paths and pages like Product Details page, Wishlists, Cart, user profile, etc.
- Checkbox filters to show filtered products for categories, types etc in shop page.
- Selection fitlers for price, rating and discounted items in **Shop** Page.
- Dropdown for each question in **Faq** page.
- Buttons and Links for **Cart**, **WishList**, **Product Details**, **Blog Detail**
- Navigate the user to the completed order page after they confrim their order.

### Pages
- Sign In Page
- Sing Up Page
- Product Details - Description Page
- Product Details - Additional Page
- Shopping Cart Page
- Order Complete Page
- Wishlist Page
- Contact Us Page
- FAQs Page
- Home Page
- Shop Page
- About Us Page
- Our Blog Page
- Blog Details Page
- 404 Page
- Coming Soon Page






