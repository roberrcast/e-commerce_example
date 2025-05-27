const menu = document.querySelector(".header__menu");

const cart = document.querySelector(".cart");

//const cartItems = document.querySelectorAll(".cart__item");

const cartItems = document.getElementsByClassName("cart__item");
console.log(cartItems.length);

const cartBadge = document.querySelector(".header__cart-badge");

const productsButtons = document.querySelectorAll(".products__button");

const cartBuy = document.querySelector(".cart__button-container");

//Función para añadir elementos al carrito de compras
productsButtons.forEach((product) => {
    product.addEventListener("click", () => {
        //Seleccionar el elemento padre para después los hijos (img, txt, price, etc.)
        productParent = product.parentElement;
        primeImg = productParent.children[0];
        primeTitle = productParent.children[1];
        primeTxt = productParent.children[2];

        //Crear el elemento para remover
        const removeItem = document.createElement("i");
        removeItem.classList.add("cart__icon-container");
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "img/trash_bin.svg";
        deleteIcon.classList.add("cart__icon-delete");
        removeItem.appendChild(deleteIcon);

        //Clonar los elementos deseados para añadirlos al nuevo elemento en el carrito
        cartImg = primeImg.cloneNode(true);
        cartTitle = primeTitle.cloneNode(true);
        cartPrice = primeTxt.cloneNode(true);

        //Quitar las clases para evitar conflictos
        cartImg.classList.remove("products__img");
        cartTitle.classList.remove("products__title");

        //Añadir las nuevas clases a los nuevos elementos
        cartImg.classList.add("cart__img");
        cartTitle.classList.add("cart__txt");
        cartPrice.classList.add("cart__txt--price");

        //Crear un div para añadirle los nuevos elementos
        newCartItem = document.createElement("div");

        //Añadir clase al nuevo elemento div en el carrito para coincidir con el estilo
        newCartItem.classList.add("cart__item");

        //Pegar los elementos en el nuevo div
        newCartItem.append(cartImg, cartTitle, cartPrice, removeItem);

        //Insertar el nuevo elemento al final antes del botón de compra
        cart.insertBefore(newCartItem, cartBuy);
    });
});

//Event listener para el icono de borrado en la forma de una event delegation (lo leí de aquí: https://www.freecodecamp.org/news/event-delegation-javascript/)
cart.addEventListener("click", (event) => {
    // Esto encuentra el ancestro más cercano que sea un icono para remover
    const removeButton = event.target.closest(".cart__icon-container");

    // Si un botón para remover, o algo dentro de él, recibió un click...
    if (removeButton) {
        // Localiza al cart item que sea su padre y lo quita
        const cartItem = removeButton.closest(".cart__item");
        if (cartItem) {
            cartItem.remove();
        }
    }
});

// Event listeners para abrir y cerrar menu y carrito respectivamente
const menuIcon = document.querySelector(".menu__button");

const closeMenu = document.querySelector(".header__close");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("show");
});

closeMenu.addEventListener("click", () => {
    menu.classList.remove("show");
});

const cartIcon = document.querySelector(".header__cart");

const closeCart = document.querySelector(".cart__close");

cartIcon.addEventListener("click", () => {
    cart.classList.toggle("show");
});

closeCart.addEventListener("click", () => {
    cart.classList.remove("show");
});

/* Función con algo que descubrí (mutation observer) */

const cartSum = (cartItems, cartBadge) => {
    let counter = 0;

    for (let i = 0; i < cartItems.length; i++) {
        counter++;
    }

    cartBadge.innerText = counter;
};

const cartContainer = document.getElementById("cart");

const badgeContainer = document.getElementById("badge");

const updateBadge = () => {
    cartSum(cartItems, cartBadge);
};

const cartObserver = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === "childList") {
            updateBadge();

            break;
        }
    }
});

const config = { childList: true };

cartObserver.observe(cartContainer, config);

updateBadge();
