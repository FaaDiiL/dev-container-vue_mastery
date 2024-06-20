app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br />
                "{{ review.review }}"
                <br />
                <br />
                Would recommand this product: 
                <span v-if="review.recommend">Yes</span>
                <span v-else>No</span>
                <hr/>
            </li>
        </ul>
    </div>
    `
})