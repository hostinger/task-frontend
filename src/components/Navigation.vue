<template>
    <div class="clearfix">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">
                <img src="/src/assets/logo.svg" alt="Hostinger">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto"> 
                    <div class="nav-item" v-bind:key="item.id" v-for="item in nav">
                        <span v-if="item.onSale" class="on-sale">On Sale</span>
                        <b-nav-item href="#">{{item.title}}</b-nav-item>
                    </div>
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
    .nav-item {
        position: relative;
    }
    .nav-link {
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
    }
    .navbar { 
        padding: 20px 0;
    }
    .on-sale {
        text-transform: uppercase;
        position: absolute;
        color: #ffc800;
        top: 0px;
        left: 7px;
        font-weight: 700;
        font-size: 0.7rem;
    }
    
    .bg-info {
        background-color: transparent !important;
    }
    @media only screen and (max-width: 991px) {
        .ml-auto {
            .nav-link {
                color: #fff;
            }
        }
        .navbar-nav {
            background: rgba(0,0,0,.2);
            padding: 10px;
        }
        .on-sale { 
            left: 0px;
        }
        .navbar-toggler {
            border: none;
        }
    }
    
</style>
