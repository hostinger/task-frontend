<template>
    <div class="clearfix">
        <b-navbar toggleable="lg" type="transparent" variant="info">
            <b-navbar-brand href="#">
                <img src="/src/assets/logo.svg" alt="Hostinger">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item text="Lang" right v-bind:key="item.id" v-for="item in nav">{{item.title}} <span v-if="item.onSale" class="on-sale">On Sale</span></b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>

    </div>
</template>

<script>
export default {
    name: 'Navigation',
    props: ["nav"],
    data() {
        
    }
}
</script>

<style scoped lang="scss">
    .nav-item:hover {
        opacity: 0.8;
        transition: opacity 0.1s ease-in-out;
    }
    .nav-link {
        color: #fff;
        text-transform: uppercase;
        font-family: "-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        font-weight: 700;
    }
    .on-sale {
        position: absolute;
        margin: -8px -100px;
        color: #ffc800;
        font-weight: 700;
        font-size: 0.7rem;
    }
    .bg-info {
        background-color: transparent !important;
    }

    @media only screen and (max-width: 600px) {
        .ml-auto {
            background-color: #fff;
            opacity: 0.8;
            .nav-link {
                color: #333;
            }
        }
    }
    
</style>
