//---------------- Datos ----------------//

document.addEventListener("DOMContentLoaded", function () {
  const products = [
    {
      name: 'Need For Speed: Most Wanted',
      description: 'Lanzado en 2012, es una versión reinventada del juego original de Need for Speed: Most Wanted. En este juego de carreras de mundo abierto, los jugadores compiten en carreras ilegales mientras intentan evadir a la policía. El objetivo principal es convertirse en el corredor más buscado, derrotando a otros corredores en desafíos y carreras callejeras.',
      price: 29.99,
      image: 'img/nfsmw.jpg',
      category: 'PC',
      gallery: ['img/galeria/1.jpg', 'img/galeria/2.jpg', 'img/galeria/3.jpg']
    },
    {
      name: 'Need For Speed: Rivals',
      description: 'Lanzado en 2013, NFS Rivals es un juego de carreras y persecuciones de alta velocidad. Los jugadores pueden elegir entre ser corredores ilegales o policías, cada uno con su propia línea de historia y objetivos. Los corredores compiten en carreras callejeras mientras evitan ser arrestados, mientras que los policías persiguen y arrestan a los corredores. El juego se desarrolla en un mundo abierto donde los jugadores pueden explorar libremente el mapa y participar en desafíos en línea con otros jugadores.',
      price: 39.99,
      image: 'img/nfsr.jpg',
      category: 'Xbox',
      gallery: ['img/galeria/4.jpg', 'img/galeria/5.jpg', 'img/galeria/6.jpg']
    },
    {
      name: 'Need For Speed 2015',
      description: 'Lanzado en 2015, este juego simplemente se titula "Need for Speed". Presenta una historia centrada en el mundo de las carreras callejeras nocturnas y los equipos de corredores. Los jugadores participan en carreras, desafíos y persecuciones policiales mientras intentan construir su reputación en la escena de las carreras callejeras. El juego ofrece una amplia personalización de los vehículos y se basa en un mundo abierto para explorar.',
      price: 19.99,
      image: 'img/nfs.jpg',
      category: 'PlayStation',
      gallery: ['img/galeria/7.jpg', 'img/galeria/8.jpg', 'img/galeria/9.jpg']
    },
    {
      name: 'Need For Speed: Payback',
      description: 'Lanzado en 2017, NFS Payback sigue una historia de venganza en el mundo de las carreras ilegales. Los jugadores asumen los roles de tres personajes diferentes mientras buscan derribar a "The House", un cartel criminal que domina las carreras en la ciudad ficticia de Fortune Valley. El juego presenta un mundo abierto, carreras emocionantes, persecuciones policiales y una amplia variedad de vehículos para elegir.',
      price: 49.99,
      image: 'img/nfsp.jpg',
      category: 'PC',
      gallery: ['img/galeria/10.jpg', 'img/galeria/11.jpg', 'img/galeria/12.jpg']
    },
    {
      name: 'Need For Speed: Heat',
      description: 'Lanzado en 2019, NFS Heat combina carreras legales e ilegales en un mundo abierto lleno de acción y peligro. Los jugadores compiten en carreras callejeras durante la noche para ganar dinero y reputación, y durante el día participan en eventos legales para aumentar sus fondos. La policía es más agresiva durante la noche y los jugadores deben evitar ser arrestados para mantener sus ganancias. El juego presenta una amplia personalización de vehículos y un mundo vibrante para explorar.',
      price: 24.99,
      image: 'img/nfsh.jpg',
      category: 'PlayStation',
      gallery: ['img/galeria/13.jpg', 'img/galeria/14.jpg', 'img/galeria/15.jpg']
    },
    {
      name: 'Need For Speed: Unbound',
      description: 'Lanzado en 2022, NFS Unbound es un juego de carreras ambientado en una ciudad ficticia llamada Lakeshore City, que se basa en Chicago. El juego presenta un estilo artístico que combina elementos artísticos como la animación del sombreado plano y graffiti con el estilo artístico más realista de los otros juegos de la serie. El "sistema de calor" de Need for Speed Heat regresa en Unbound, donde el jugador intenta ganar notoriedad entre la policía. ',
      price: 34.99,
      image: 'img/nfsu.jpg',
      category: 'Xbox',
      gallery: ['img/galeria/16.jpg', 'img/galeria/17.jpg', 'img/galeria/18.jpg']
    }
  ];

  //---------------- Variables ----------------//

  let cartProducts = [];
  let cartTotalPrice = 0;

  //---------------- DOM ----------------//

  const productList = document.getElementById('product-list');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total-price');
  const productModal = document.getElementById('product-modal');
  const productModalTitle = document.getElementById('product-modal-title');
  const productModalDescription = document.getElementById('product-modal-description');
  const productModalPrice = document.getElementById('product-modal-price');
  const addToCartModalButton = document.getElementById('add-to-cart-modal-button');
  const cartModal = document.getElementById('cart-modal');
  const cartProductList = document.getElementById('cart-product-list');
  const cartModalTotal = document.getElementById('cart-modal-total');
  const clearCartButton = document.getElementById('clear-cart-button');
  const showCartButton = document.getElementById('show-cart-button');
  const filterButtons = document.querySelectorAll('.filter-button');
  const productModalClose = document.getElementById('product-modal-close');
  const cartModalClose = document.getElementById('cart-modal-close');
  const checkoutButton = document.getElementById('checkout-button');
  const checkoutModal = document.getElementById('checkout-modal');
  const checkoutModalClose = document.getElementById('checkout-modal-close');
  const cancelCheckoutButton = document.getElementById('cancel-checkout-button');

  //---------------- Iniciar la página ----------------//

  function initializePage() {
    renderProductList();
    updateCartSummary();
    addFilterListeners();
    checkoutButton.addEventListener('click', openCheckoutModal);
    checkoutModalClose.addEventListener('click', closeCheckoutModal);
    cancelCheckoutButton.addEventListener('click', closeCheckoutModal);
  }

//---------------- Renderizar la lista de productos ----------------//

function renderProductList(category = 'All') {
  const fragment = document.createDocumentFragment();

  while (productList.firstChild) {
    productList.firstChild.remove();
  }

  const filteredProducts = category === 'All' ? products : products.filter(product => product.category === category);

  filteredProducts.forEach((product, index) => {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'col-md-6 col-lg-4 mb-4';

    const card = document.createElement('div');
    card.className = 'card h-100';

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;
    image.className = 'card-img-top';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = product.name;

    const description = document.createElement('p');
    description.className = 'card-text';
    description.textContent = product.description;
    description.style.overflow = 'hidden';
    description.style.display = '-webkit-box';
    description.style.webkitBoxOrient = 'vertical';
    description.style.webkitLineClamp = '2';
    description.style.maxHeight = '3.6em'; //

    const price = document.createElement('p');
    price.className = 'card-text';
    price.textContent = `Precio: $${product.price.toFixed(2)}`;
    price.style.borderRadius = "5px";
    price.style.fontSize = "1.1rem";
    price.style.textShadow = "1px 1px 2px black";
    price.style.textAlign = "center";
    price.style.color = "aliceblue";
    price.style.backgroundColor = "mediumpurple";
    price.style.padding = "5px";

    const addToCartButton = document.createElement('button');
    addToCartButton.className = 'btn btn-success';
    addToCartButton.textContent = 'Agregar al Carrito';
    addToCartButton.addEventListener('click', () => {
      addToCart(index);
    });

    const viewDetailsButton = document.createElement('button');
    viewDetailsButton.className = 'btn btn-primary';
    viewDetailsButton.textContent = 'Ver Detalles';
    viewDetailsButton.addEventListener('click', () => {
      openProductModal(index); 
    });

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(viewDetailsButton);
    cardBody.appendChild(addToCartButton);    

    card.appendChild(image);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);

    fragment.appendChild(cardContainer);
  });

  productList.appendChild(fragment);
}

  //----------------  Actualizar carrito ----------------//

  function updateCartSummary() {
    cartCount.textContent = Object.keys(cartProducts).length;

    cartTotalPrice = Object.values(cartProducts).reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);

    cartTotal.textContent = cartTotalPrice.toFixed(2);
  }

  // ---------------- Banner de oferta especial ---------------- //

  let specialOfferBannerShown = false;

  function showSpecialOfferBanner() {
    if (!specialOfferBannerShown) {
      specialOfferBannerShown = true;
  
      const specialOfferBanner = document.createElement('div');
      specialOfferBanner.classList.add('special-offer-banner');
      specialOfferBanner.textContent = '¿Ya viste el nuevo Need For Speed? ¡Juga ya al nuevo NFS: Unbound!';
      document.body.appendChild(specialOfferBanner);
  
      setTimeout(function () {
        specialOfferBanner.remove();
        specialOfferBannerShown = false;
      }, 10000);
    }
  }

  // ---------------- Filtrado de productos y eventos ---------------- //

  function addFilterListeners() {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;
        showSpecialOfferBanner();
        renderProductList(category);
      });
    });
  }

  showCartButton.addEventListener('click', openCartModal);

  clearCartButton.addEventListener('click', clearCart);

  //---------------- Abrir el modal de un producto ----------------//

  function openProductModal(index) {
    const product = products[index];
  
    productModalTitle.textContent = product.name;
    productModalDescription.textContent = product.description;
    productModalPrice.textContent = `Precio: $${product.price.toFixed(2)}`;
    productModalPrice.style.borderRadius = "5px";
    productModalPrice.style.fontSize = "1.3rem";
    productModalPrice.style.textShadow = "1px 1px 2px black";
    productModalPrice.style.textAlign = "center";
    productModalPrice.style.color = "aliceblue";
    productModalPrice.style.backgroundColor = "mediumpurple";
    productModalPrice.style.padding = "5px";
    addToCartModalButton.dataset.index = index;
  
    const galleryInner = document.querySelector("#product-modal-gallery .carousel-inner");
    while (galleryInner.firstChild) {
      galleryInner.removeChild(galleryInner.firstChild);
    }
  
    product.gallery.forEach((imageSrc, imageIndex) => {
      const galleryItem = document.createElement("div");
      galleryItem.className = imageIndex === 0 ? "carousel-item active" : "carousel-item";
  
      const image = document.createElement("img");
      image.src = imageSrc;
      image.className = "d-block w-100";
  
      galleryItem.appendChild(image);
      galleryInner.appendChild(galleryItem);
    });
  
    productModal.style.display = "block";
  }

  //---------------- Cerrar el modal de un producto ----------------//

  function closeProductModal() {
    productModal.style.display = 'none';
  }

  //---------------- Abrir el modal del carrito ----------------//

  function openCartModal() {
    while (cartProductList.firstChild) {
      cartProductList.firstChild.remove();
    }

    Object.values(cartProducts).forEach((product) => {
      const listItem = document.createElement("li");
      const productName = document.createElement("h3");
      const productPrice = document.createElement("p");
      const productQuantity = document.createElement("p");
      const removeFromCartButton = document.createElement("button");

      productName.textContent = product.name;
      productPrice.textContent = `Precio: $${(product.price * product.quantity).toFixed(2)}`;
      productQuantity.textContent = `Cantidad: ${product.quantity}`;

      removeFromCartButton.className = "btn btn-danger remove-from-cart-button";
      removeFromCartButton.dataset.name = product.name;
      removeFromCartButton.textContent = "Eliminar";

      removeFromCartButton.addEventListener("click", () => {
        removeFromCart(product.name);
      });

      listItem.appendChild(productName);
      listItem.appendChild(productPrice);
      listItem.appendChild(productQuantity);
      listItem.appendChild(removeFromCartButton);

      cartProductList.appendChild(listItem);
    });

    cartModalTotal.textContent = `Total a pagar: $${cartTotalPrice.toFixed(2)}`;

    cartModal.style.display = "block";
  }

  //---------------- Cerrar el modal del carrito ----------------//

  function closeCartModal() {
    cartModal.style.display = 'none';
  }

  //---------------- Agregar un producto ----------------//

  function addToCart(index) {
    const product = products[index];
    const productName = product.name;

    if (cartProducts[productName]) {
      cartProducts[productName].quantity += 1;
    } else {
      cartProducts[productName] = {
        name: productName,
        price: product.price,
        quantity: 1,
      };
    }

    updateCartSummary();
  } 

  //---------------- Eliminar un producto ----------------//

  function removeFromCart(productName) {
    if (cartProducts[productName].quantity > 1) {
      cartProducts[productName].quantity -= 1;
    } else {
      delete cartProducts[productName];
    }

    updateCartSummary();
    openCartModal();
  }

  //---------------- Vaciar el carrito ----------------//

  function clearCart() {
    cartProducts = [];
    updateCartSummary();
    openCartModal();
  }

  //---------------- Listeners para los botones y eventos ----------------//

  addToCartModalButton.addEventListener('click', () => {
    const index = parseInt(addToCartModalButton.dataset.index);
    addToCart(index);
    updateCartSummary();
  });

  showCartButton.addEventListener('click', openCartModal);

  clearCartButton.addEventListener('click', clearCart);

  productModalClose.addEventListener('click', closeProductModal);

  cartModalClose.addEventListener('click', closeCartModal);

  //---------------- Keycodes ----------------//

  // Cerrar ventanas con Esc
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeProductModal();
      closeCartModal();
      closeCheckoutModal();
    }
  });

    // Mover Carrusel Banner
    document.addEventListener("keydown", function (event) {
      const carouselElement = document.getElementById("carouselExampleCaptions");
  
      if (event.keyCode === 37) {
        const prevSlideEvent = new Event("click", { bubbles: true });
        const prevSlideButton = carouselElement.querySelector(
          '[data-bs-slide="prev"]'
        );
        prevSlideButton.dispatchEvent(prevSlideEvent);
      } else if (event.keyCode === 39) {
        const nextSlideEvent = new Event("click", { bubbles: true });
        const nextSlideButton = carouselElement.querySelector(
          '[data-bs-slide="next"]'
        );
        nextSlideButton.dispatchEvent(nextSlideEvent);
      }
    });

    // Mover Carrusel Galeria
    document.addEventListener("keydown", function (event) {
      const carouselElement = document.getElementById("product-modal-gallery");
  
      if (event.keyCode === 37) {
        const prevSlideEvent = new Event("click", { bubbles: true });
        const prevSlideButton = carouselElement.querySelector(
          '[data-bs-slide="prev"]'
        );
        prevSlideButton.dispatchEvent(prevSlideEvent);
      } else if (event.keyCode === 39) {
        const nextSlideEvent = new Event("click", { bubbles: true });
        const nextSlideButton = carouselElement.querySelector(
          '[data-bs-slide="next"]'
        );
        nextSlideButton.dispatchEvent(nextSlideEvent);
      }
    });

  // ---------------- Checkout ---------------- //

  function openCheckoutModal() {
    checkoutModal.style.display = 'block';
  }

  function closeCheckoutModal() {
    checkoutModal.style.display = 'none';
  }

  // ---------------- Formulario ---------------- //
  
  const checkoutFormContainer = document.getElementById('checkout-form-container');

  const checkoutForm = document.createElement('form');
  checkoutForm.id = 'checkout-form';
  
  const formElements = [
    { label: 'Nombre:', type: 'text', id: 'customer-name', required: true },
    { label: 'Teléfono:', type: 'tel', id: 'customer-phone', required: true },
    { label: 'Email:', type: 'email', id: 'customer-email', required: true },
    { label: 'Idioma del juego:', type: 'select', id: 'game-language', required: true, options: ['Español', 'Inglés', 'Otros'] },
    { label: 'Fecha de nacimiento:', type: 'date', id: 'customer-birthdate', required: true },
    { label: 'Método de pago:', type: 'select', id: 'payment-method', required: true, options: ['Tarjeta de crédito', 'Tarjeta de débito', 'Efectivo'] },
    { label: 'Cuotas:', type: 'number', id: 'installments', min: 1, max: 12, value: 1 }
  ];
  
  const requiredFieldIndicator = document.createElement('p');
  requiredFieldIndicator.textContent = 'Campos obligatorios enmarcados en violeta';
  requiredFieldIndicator.style.color = 'darkviolet';
  checkoutFormContainer.appendChild(requiredFieldIndicator);
  
  formElements.forEach(element => {
    const formGroup = document.createElement('div');
    formGroup.className = 'form-group';
  
    const label = document.createElement('label');
    label.textContent = element.label;
  
    let input;
    if (element.type === 'select') {
      input = document.createElement('select');
      input.id = element.id;
      element.options.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        input.appendChild(option);
      });
  
      // Disable installment options for 'Efectivo' and 'Tarjeta de débito'
      input.addEventListener('change', function() {
        const paymentMethod = document.getElementById('payment-method');
        const installments = document.getElementById('installments');
        if (paymentMethod.value === 'Efectivo' || paymentMethod.value === 'Tarjeta de débito') {
          installments.disabled = true;
        } else {
          installments.disabled = false;
        }
      });
    } else {
      input = document.createElement('input');
      input.type = element.type;
      input.id = element.id;
      if (element.type === 'number' && element.value) {
        input.value = element.value;
      }
    }
  
    if (element.required) {
      input.required = true;
      input.style.border = '1px solid darkviolet';
    }
  
    if (element.min) {
      input.min = element.min;
    }
  
    if (element.max) {
      input.max = element.max;
    }
  
    if (element.id === 'customer-name') {
      input.pattern = '^[A-Za-zÁ-ÿ ]+$';
      input.title = 'Ingrese un nombre válido (solo letras y espacios)';
    } else if (element.id === 'customer-phone') {
      input.pattern = '^[0-9-]+$';
      input.title = 'Ingrese un teléfono válido (solo números y guiones)';
    } else if (element.id === 'customer-email') {
      input.pattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
      input.title = 'Ingrese un email válido';
    } else if (element.id === 'customer-birthdate') {
      const currentDate = new Date();
      const minDate = new Date();
      minDate.setFullYear(currentDate.getFullYear() - 13);
      input.max = minDate.toISOString().split('T')[0];
      input.title = 'Debes ser mayor de 13 años para realizar la compra';
    }
  
    formGroup.appendChild(label);
    formGroup.appendChild(input);
    checkoutForm.appendChild(formGroup);
  });
  
  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.className = 'btn btn-success';
  submitButton.textContent = 'Realizar compra';
  
  checkoutForm.appendChild(submitButton);
  checkoutFormContainer.appendChild(checkoutForm);
  

  //---------------- Inicializar la página ----------------//

  initializePage();
});

 //--------------------------------//