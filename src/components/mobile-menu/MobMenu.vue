<template>
<div class="mobile">
    <div class="mob-logo">
        <img class="mob-logo__img" src="../../assets/logo.svg" alt="Hostinger logo">
    </div>
    <div class="mob-burger" @click="clicked = !clicked">
        <div class="mob-burger__legs"></div>
    </div>
    <div class="mobile__wrapper" :style="{'display': showMenu}">
        <nav class="mob-nav">
            <ul class="mob-nav__list">
                <li class="mob-nav__item">Web hosting</li>
                <li class="mob-nav__item mob-nav__item--hover">
                    <span class="mob-nav__badge">
                    On sale
                    </span>
                    Cloud hosting
                    </li>
                <li class="mob-nav__item">VPS hosting</li>
                <li class="mob-nav__item">Domain checker</li>
                <li class="mob-nav__item">Website builder</li>
            </ul>
        </nav>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            clicked: false
        }
    },
    computed: {
        showMenu() {
            return this.clicked ? 'block' : 'none';
        }
    }
}
</script>


<style lang="scss">
    @import '../../scss/helper.scss';
    .mobile {
        @include flipX;
        position: relative;
        background-color: $color-violet;
        height: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        z-index: 9999;
        &__wrapper {
            top: 100%;
            width: 100%;
            height: calc(100vh - 50px);
            position: absolute;
            background-color: $color-darkviolet;
        }
        .mob-logo {
            height: 22px;
            justify-self: start;
            align-self: center;
            margin-left: 15px;
        }
        .mob-burger {
            position: relative;
            justify-self: end;
            align-self: center;
            cursor: pointer;
            margin-right: 10px;
            height: 50px;
            width: 50px;
            &__legs {
                height: 3px;
                width: 26px;
                background-color: $color-white;
                border-radius: 3px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50% -50%);
                &::after {
                    content: "";
                    position: absolute;
                    top: 8px;
                    height: 3px;
                    width: 26px;
                    background-color: $color-white;
                    border-radius: 3px;
                }
                &::before {
                    content: "";
                    position: absolute;
                    top: -8px;
                    height: 3px;
                    width: 26px;
                    background-color: $color-white;
                    border-radius: 3px;
                }
            }

        }
        .mob-nav {
            display: grid;
            color: $color-white;
            height: 100%;
            &__list {
                align-self: center;
                justify-self: center;
                text-align: center;
                font-size: 2em;
                list-style: none;
            }
            &__item {
                position: relative;
                color: $color-white;
                text-transform: uppercase;
                font-weight: 700;
                letter-spacing: 1px;
                cursor: pointer;
                transition: all .5s;
                &:hover {
                    opacity: .6;
                }

                &:hover .mob-nav__badge {
                    opacity: 1;
                    visibility: visible;
                    left: 85%;
                }
                &--hover:hover {
                    position: relative;
                    transform: translateX(-10%);
                }
            }

            &__badge {
                color: $color-yellow;
                opacity: 0;
                font-weight: 400;
                font-size: 14px;
                display: block;
                width: 50%;
                top: 50%;
                left: 50%;
                position: absolute;
                visibility: hidden;
                transition: all .4s;
                transform: translateY(-50%);
            }
        }
    }
</style>


