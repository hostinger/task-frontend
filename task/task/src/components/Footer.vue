<template>
    <footer class="footer">
        <div class="container">
            <div class="flex">
                <div class="flex-item">
                    <font-awesome-icon icon="check" size="xs" class="icon"/>
                    Guaranteed 99.9% Uptime
                </div>
                <div class="flex-item">
                    <font-awesome-icon icon="check" size="xs" class="icon"/>
                    Superior Speed Performance
                </div>
                <div class="flex-item">
                    <font-awesome-icon icon="check" size="xs" class="icon"/>
                    24/7 Support Chat
                </div>
                <div class="flex-item">
                    <font-awesome-icon icon="check" size="xs" class="icon"/>
                    30-Day Money-back Guarantee
                </div>
            </div>
        </div>
        
    </footer>
</template>

<script>
export default {
    name: "Footer",

}
</script>

<style scoped lang="scss">
    .footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: #fff;
    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
    .flex-item {
        margin: 5px 0; 
    }
    .icon {
        color: #7cc678;
    }
</style>
