<template>
    <div class="col-md-6 col-sm-12 pricing padding">
        <div class="discount-price">
            <div class="discount">
                <div class="discount-bubble">Save {{offer.price.discount}}%</div>
            </div>
            <div class="dollar-sign font-heavy">$</div>
            <div class="dollars font-heavy">{{offer.price.dollars}}</div>
            <div class="flex-col">
                <div class="cents font-heavy">{{offer.price.cents}}</div>
                <div class="a-month font-heavy">/mo</div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Pricing",
    props: ["offer"],
    methods: {
        calculateDiscount() {
            const totalPrice = (this.offer.price.dollars * 100 + this.offer.price.cents) * (1 - this.offer.price.discount * 0.01);
            this.offer.price.dollars = Math.floor(totalPrice / 100);
            this.offer.price.cents = Math.floor(totalPrice % 100);
        }
    },
    beforeMount() {
        this.calculateDiscount()
    }
}
</script>

<style scoped lang="scss">
.discount {
    position: absolute;
    left: 50%;
}
.pricing {
    color: #fff;     
}
.discount-bubble {
	position: relative;
	background: #fd5052;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    top: -10px;
    left: -190%;
    opacity: 0.8;
}

.discount-bubble:after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 20px solid transparent;
	border-top-color: #fd5052;
	border-bottom: 0;
	margin-left: -20px;
	margin-bottom: -20px;
}
.discount-price { 
    display: flex;
    font-weight: 600;
    margin-top: -30px;
    .dollar-sign {
        position: relative;
        font-size: 6rem;
        margin: auto 0;
    }
    .dollars {
        position: relative;
        font-size: 13rem;
        margin: auto 0;
    }
    .flex-col {
        display: flex;
        flex-flow: column;
        margin: auto 0;
        font-size: 4.2rem;
    }
    
}
@media only screen and(max-width: 991px) {
        .discount-price {
            justify-content: center !important;
        }
        .discount-bubble {
            left: -50%;
        }
    }
</style>
