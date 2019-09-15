<template>
    <layout-primary page-header-theme="transparent">

        <promo-new-year />

        <landing-page-section>
            <h1 class="h1 h-text-align-center">Section</h1>

            <div class="placeholder">
                <p>Placeholder</p>
            </div>
        </landing-page-section>

        <landing-page-section theme="light">
            <h1 class="h1 h-text-align-center">Another Section</h1>

            <flex-columns equal-width
                          single-on="md"
            >
                <flex-col>
                    <h2 class="h3">Lorem ipsum</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et nibh sit amet enim tempor consectetur. Praesent et convallis ligula, quis rutrum mi.</p>
                </flex-col>
                <flex-col>
                    <h2 class="h3">Pellentesque</h2>
                    <p>Cras laoreet libero finibus, consequat nibh</p>
                    <p>Sed semper faucibus nunc, sollicitudin ullamcorper nisl dignissim eu.</p>
                </flex-col>
                <flex-col>
                    <h2 class="h3">At sem arcu</h2>
                    <p>Sed semper faucibus nunc, sollicitudin ullamcorper nisl dignissim eu.</p>
                    <p>Sed semper faucibus nunc sollicitudin.</p>
                </flex-col>
                <flex-col>
                    <h2 class="h3">Fusce orci</h2>
                    <p>Cras laoreet libero finibus, consequat nibh tristique, hendrerit lectus. Integer felis metus, vehicula ac turpis at, maximus volutpat diam. Nulla facilisi.</p>
                </flex-col>
            </flex-columns>
        </landing-page-section>

    </layout-primary>
</template>

<script>
import '@/assets/icons/check.svg';
import LayoutPrimary from "@/components/pageLayout/LayoutPrimary";
import LandingPageSection from "@/components/LandingPageSection";
import FlexColumns from "@/components/layout/FlexColumns";
import FlexCol from "@/components/layout/FlexCol";
import PromoNewYear from "./PromoNewYear";

export default {
    name: 'ViewHome',
    components: {
        PromoNewYear,
        FlexCol,
        FlexColumns,
        LandingPageSection,
        LayoutPrimary,
    },
}
</script>

<style scoped lang="scss">
.placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 700px;
    height: 400px;
    margin: 1.5em auto;
    background-color: lighten($color-bg-dark, 60%);
    letter-spacing: 2px;
    text-transform: lowercase;
}
</style>