const app = Vue.createApp({
    // template: '<h2>Right Here</h2>'
    data(){
        return{
            books: [
                {
                    title:'The Lion King',
                    author: 'Stephen King',
                    year: 2005,
                    ranking: 2,
                    trending: true,
                    price: 2500,
                    image: 'img/1.jpg'
                },
                {
                    title:'Betrayal In the City',
                    author: 'Nathan B. Kingsley',
                    year: 1997,
                    ranking: 4,
                    price: 3400,
                    trending: false,
                    image: 'img/2.jpg'
                },
                {
                    title:'Into The Badlands',
                    author: 'Kingsley Coman',
                    year: 1990,
                    ranking: 1,
                    price: 300,
                    trending: true,
                    image: 'img/3.jpg'
                },
                {
                    title:'Sights and Sees',
                    author: 'Robert Mugabe',
                    year: 1900,
                    ranking: 2,
                    price: 3000,
                    trending: false,
                    image: 'img/4.jpg'
                }
            ],
            showBooks: false,
            x: 0,
            y: 0
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
        },

        handleEvent(e, data){
            if (data){
                console.log(data)
            }
            console.log(e.type)
            // console.log(e, e.type)
        },

        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },

        toggleFav(book){
            book.trending = !book.trending
            // this.books.forEach(bookSingle=>{
            //     if (bookSingle == book){
            //         book.trending = !book.trending
            //     }
            // })
        }
    },

    computed: {
        favBooks(){
            return this.books.filter(book=>book.trending)
        }
    }
})

app.mount('#app')