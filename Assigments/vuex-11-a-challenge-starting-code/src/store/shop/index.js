const shopStore = {
  state() {
    return {
      products: [
        {
          id: 'p1',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99
        },
        {
          id: 'p2',
          image:
            'https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99
        },
        {
          id: 'p3',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99
        }
      ],
      cart: { items: [], total: 0, qty: 0 }
    }
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    getCart(state){
      return state.cart;
    }
  },
  mutations: {
    modifyCart(state, payload) {
      if (payload.action === 'add') {
        const productInCartIndex = state.cart.items.findIndex(
          (ci) => ci.productId === payload.product.id
        );

        if (productInCartIndex >= 0) {
          state.cart.items[productInCartIndex].qty++;
        } else {
          const newItem = {
            productId: payload.product.id,
            title: payload.product.title,
            image: payload.product.image,
            price: payload.product.price,
            qty: 1
          };
          state.cart.items.push(newItem);
        }
        state.cart.qty++;
        state.cart.total += payload.product.price;

      } else if (payload.action === 'remove') {
        const productInCartIndex = state.cart.items.findIndex(
          (cartItem) => cartItem.productId === payload.product.id
        );
        const prodData = state.cart.items[productInCartIndex];
        state.cart.items.splice(productInCartIndex, 1);
        state.cart.qty -= prodData.qty;
        state.cart.total -= prodData.price * prodData.qty;
      }
    }
  },
  actions: {
    addProductToCart(context, productData) {
      context.commit({
        type: 'modifyCart',
        action: 'add',
        product: productData
      });
    },
    removeProductFromCart(context, productID) {
      context.commit({
        type: 'modifyCart',
        action: 'remove',
        product: { id: productID }
      });
    }
  }
}

export default shopStore;