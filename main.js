const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inventory: 11,
            onSale: true,
            inStock: function (){
                return this.inventory > 10
            },
            almostSoldOut: function (){
                return this.inventory <= 10 && this.inventory > 0
            },
        }
    }
})
