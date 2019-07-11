<template>
    <div class="col-md-6 col-sm-12 pricing">
        <div class="dollar-sign font-heavy">
            <span>$</span>
        </div>
        <div class="discount-bubble"><span class="discount">Save {{offer.price.discount}}%</span></div>
        <div class="discount-price">
            <div class="dollars font-heavy">{{offer.price.dollars}}</div>
            <div class="cents font-heavy">{{offer.price.cents}}</div>
            <div class="a-month font-heavy">/mo</div>
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
    display: flex;
}
.font-heavy {
    font-weight: 800;
}
.pricing {
        color: #fff;
    }
    .discount {
        position: inherit;
        text-transform: uppercase;
    }
    .discount-bubble {
        position: relative;
        background: #fd5052;
        max-width: 100px;
        height: 40px;
        opacity: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
        right: -90px;
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
    .a-month {
        font-size: 4rem;
        position: relative;
        top: 115px;
        right: 100px;
    }
    .cents {
        font-size: 7rem;
        position: relative;
        top: -5px;
        right: -30px;
    }
    .dollars {
        font-size: 12rem;
        position: relative;
        padding-left: 75px;
        top: -40px;
    }
    .dollar-sign {
        font-size: 4rem;
        float: left;
        position: relative;
        top: 105px;
        left: 50px;
    }
    .padding {
        padding: 3rem 0 0 0;
    }
    @media screen and (max-width: 991px) {
        .sale { 
            display: flex;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
        }
        .countdown {
            width: 100%;
            margin: auto;
        }
        .padding {
            padding-top: 1rem;
        }
        .discount-price {
            max-height: 250px;
        }
        .center-text {
            text-align: center;
        }
        .offer {
            display: flex;
            flex-flow: column;
        }
    }
</style>
