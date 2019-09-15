<template>
    <div class="field-wrapper">
        <label v-if="$slots.before"
               :for="$attrs.id"
               class="field__label"
        >
            <slot name="before" />
        </label>

        <input v-bind="$attrs"
               class="field"
               v-on="$listeners"
        />

        <label v-if="$slots.after"
               :for="$attrs.id"
               class="field__label"
        >
            <slot name="after" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
};
</script>

<style scoped lang="scss">
.field-wrapper {
    display: flex;
    align-items: center;
}

.field {
    width: 80px;
    height: 38px;
    padding-right: .5em;
    padding-left: .5em;
    border: 2px solid $color-bg-dark;
    border-radius: 5px;
    font-family: inherit;
    font-size: inherit;
    text-align: center;

    &__label {
        padding: .15em .5em;
        font-size: 12px;
        text-transform: uppercase;
        white-space: nowrap;
    }

    &:focus {
        border-color: $color-brand-primary;
        outline: none;
    }
}
</style>
