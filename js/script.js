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
        }
    }
})