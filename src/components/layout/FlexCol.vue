// Flex Column tends to grow with various styling options (variety of flexbox).
// It's better to keep those options and class names scoped inside the component.
<template>
    <div class="flex-col">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'FlexCol',
}
</script>
