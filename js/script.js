console.log(Vue);

const root = new Vue({
    el: '#root',
    data: { 
        currentIndex: 0,
        images: [
            'img/image1.jpg',
            'img/image2.jpg',
            'img/image3.jpg',
            'img/image4.jpg',

        ],
    },
    methods: {
        isActive(index){
            return this.currentIndex === index ? 'active' : '';             //grazie a questa funzione vediamo se è presente l'active
        },
        increaseIndex(){ 
            const lastIndex = this.images.length - 1;                                                   //funzione per incrementare l'index dell'immagine
            this.currentIndex = this.currentIndex === lastIndex ? 0 : this.currentIndex + 1;
        },
        decreaseIndex(){
            const lastIndex = this.images.length - 1;                                                   //funzione per decrementare l'index dell'immagine
            this.currentIndex = this.currentIndex === 0 ? lastIndex : this.currentIndex - 1;
            
        },
        setCurrentIndex(newIndex){
            this.currentIndex = newIndex;
        }
    }
})