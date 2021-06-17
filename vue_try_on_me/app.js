const app = Vue.createApp({
    // template: '<h1>Testing my view app</h1>',
    // data(){
    //     return{
    //         location: 'Kampala',
    //         package_weight: 23,
    //         price: none,
    //         delivery_fee: none,
    //         showCart: true,
    //         placeOrder: false
    //     }
    // }
    data(){
        return{
            location: '',
            package_weight: 0,
            price: 0,
            delivery_fee: 0,
            showCart: false,
            placeOrder: false,
            showTotal: false,
            totalPrice: 0
        }
    },
    methods:{
        makeOrder(location, package_weight, price){
            this.location = location,
            this.package_weight = package_weight,
            this.price = price,
            this.placeOrder = !this.placeOrder
            // console.log()
            // return location, package_weight, price
            // this.showCart = !this.showCart
        },
        totalDeliveryCost(location, weight){
            this.makeOrder(this.location, this.package_weight, this.price)
            this.placeOrder = !this.placeOrder
            if (this.location == 'Kampala'){
                this.delivery_fee = 5000
            } else {
                this.delivery_fee = 10000
            }
            if (this.package_weight > 20){
                this.delivery_fee += 1000
            }
            console.log(this.package_weight)
            console.log(this.delivery_fee)
        },

        totalCost(price){
            this.totalDeliveryCost(this.location,this.weight)
            // this.makeOrder(this.location, this.package_weight, this.price)
            this.showTotal = !this.showTotal
            this.totalPrice = this.price + this.delivery_fee
            console.log(this.totalPrice)
            console.log(this.showTotal)
        },

        toggleCart(){
            // this.placeOrder()
            this.showCart = !this.showCart
            // this.totalDeliveryCost()
        }
    }
})

app.mount('#app')