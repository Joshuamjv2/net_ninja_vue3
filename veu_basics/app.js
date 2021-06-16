const app = Vue.createApp({
    // template: '<h2>Right Here</h2>'
    data(){
        return{
            title: 'The final Empire',
            author: 'Joshua Bryant',
            age: 25,
            showBooks: false
        }
    },

    methods: {
        changeTitle(newTitle){
            // console.log('You clicked me')
            // this.title = 'Man of the year'
            this.title = newTitle
        },

        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')