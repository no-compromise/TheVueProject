// console.log('Hellou there')

const app = Vue.createApp({
    data() {
        return {
            url :   'http://',
            toggle  : true,
            x   :   0,
            y   :   0,
            books   : [
                {title: "Titul 1", author: "John Cena", isFav: true},
                {title: "Titul 2", author: "Fredy Kruger", isFav: false},
                {title: "Titul 3", author: "Tim Limo", isFav: true}
            ]

        }
    },
    methods: {
        
        toggleButton() {
            this.toggle = !this.toggle
        },
        toggleFav(book){
            book.isFav = !book.isFav

        }
        
    }
})



app.mount('#app')