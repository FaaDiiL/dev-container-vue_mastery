app.component('product-details',{
    props: {
        details: {
            type: Array,
            required: false,
        }
    },
    template: 
    /*html*/
    `
    <ul>
        <li v-for="(detail, index) in details" key="index">
            {{ detail }}
        </li>
    </ul>
    `
})