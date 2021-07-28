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
        increaseIndex(){                                                    //funzione per incrementare l'index dell'immagine
            if(this.cuerrentIndex === this.images.length - 1){               //se il currentIndex raggiunge la lunghezza massima dell'array torna al primo elemento
                this.currentIndex = 0;
            } else{
                this.currentIndex++;
            }
        },
        decreaseIndex(){
            if(this.cuerrentIndex === 0){                                   //Il currentIndex non può andare sotto zero
                this.currentIndex = this.images.length - 1;
            } else{
                this.currentIndex--;
            }
        }
    }
})