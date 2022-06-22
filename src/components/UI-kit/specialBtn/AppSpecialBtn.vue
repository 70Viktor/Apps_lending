<template>
    <div class="special-btn">
        <div class="icon">
            <img :src="require('@/assets/' + image + '')" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppSpecialBtn",
        props: {
            image: String
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>