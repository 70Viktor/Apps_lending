<template>
    <div class="wrap">
        <button class="btn">
            {{ text }}
        </button>
    </div>
</template>

<script>
    export default {
        name: "AppBtn",
        props: {
            text: {
                type: String,
                required: true
            }
        }

    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>