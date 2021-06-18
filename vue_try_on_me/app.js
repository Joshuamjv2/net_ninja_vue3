const app = Vue.createApp({
    data(){
        return{
            products: [
                {
                    product_name: 'Airforce 1',
                    price: 1000,
                    img: 'img/1.jpg',
                    inCart: 0,
                    productCost: 0,
                    // added =
                },
                {
                    product_name: 'Nike 2 Ultra Walk',
                    price: 1599,
                    img: 'img/2.jpg',
                    inCart: 0,
                    productCost: 0
                },
                {
                    product_name: 'Air Jordans 2xp',
                    price: 1900,
                    img: 'img/3.jpg',
                    inCart: 0,
                    productCost: 0
                }
            ],
            openShop: false,
            showCart: false,
            ShowCheckOut: false
        }
    },

    methods: {
        toggleShop(e){
            e.preventDefault()
            this.openShop = !this.openShop
            console.log(this.openShop)
        },

        toggleCart(e){
            e.preventDefault()
            this.showCart = !this.showCart
        },

        toggleAddToCart(product){
            product.inCart = 1
            product.productCost = product.inCart * product.price
            // this.totalCost(product)
        },

        totalCost(product){
            product.productCost = product.inCart * product.price
        },

        toggleRemoveFromCart(product){
            product.inCart = 0;
        },

        increaseCart(product){
            product.inCart++
            this.totalCost(product)
        },

        reduceCart(product){
            product.inCart--
            this.totalCost(product)
        }
    },

    computed: {
        cartItems(){
            return this.products.filter(product=>product.inCart>0)
        }
    }
})

app.mount('#app')