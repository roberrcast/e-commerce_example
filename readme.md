# Tienda British Museum - E-Commerce Example

    A responsive, static e-commerce web application inspired by the British Museum store. This project features a clean, modern user interface to display

products and manage a shopping cart, built with plain HTML, CSS, and vanilla JavaScript.

    ## Features

    - **Modern UI/UX**: Clean and visually appealing design using the Lexend font (via Google Fonts).
    - **Responsive Navigation**: A toggleable side menu for easier navigation on smaller screens.
    - **Product Gallery**: A grid layout displaying items like museum replicas, books, and jewelry along with their pricing and a call-to-action to add to

the cart. - **Shopping Cart**: An interactive off-canvas shopping cart where users can view selected items and remove them. - **Feather Icons**: Integration of lightweight, open-source Feather icons for social media links. - **Firebase Ready**: Pre-configured for easy deployment using Firebase Hosting.

    ## Tech Stack

    - **HTML5**: Semantic markup structuring the content.
    - **CSS3**: Custom styling stored in the `CSS/` directory.
    - **JavaScript**: Client-side interactivity (menu toggling, cart management) found in the `js/` directory.
    - **Firebase**: Deployment configuration files (`firebase.json`, `.firebaserc`).

    ## Project Structure

    ```text
    e-commerce_example/
    ├── CSS/                  # Stylesheets for the application
    ├── js/                   # JavaScript files for interactivity
    ├── img/                  # Images and SVG icons used in the UI
    ├── screenshots/          # Screenshots of the application
    ├── index.html            # Main entry point/home page
    ├── 404.html              # Custom 404 error page
    ├── firebase.json         # Firebase hosting configuration
    ├── .firebaserc           # Firebase project alias
    └── .gitignore            # Git ignored files

## Getting Started

### Prerequisites

To run this project locally, you only need a web browser. No complex build tools are required.

### Running Locally

1. Clone the repository to your local machine.
2. Open the index.html file directly in your preferred web browser.
3. Alternatively, use a local development server like VS Code's "Live Server" extension for a better development experience with hot-reloading.

### Deployment

This project is already configured for deployment with Firebase Hosting.
If you have the Firebase CLI installed:

1. Log in to your Firebase account:
   firebase login

2. Initialize the project (if needed) or select your existing project:
   firebase use --add

3. Deploy to production:
   firebase deploy

## Design Notes

• The design implements SVG graphics for crisp iconography.
• Uses dynamic layout techniques like CSS Flexbox/Grid for a fully responsive user experience across desktop and mobile devices.
