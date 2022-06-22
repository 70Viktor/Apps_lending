<template>
    <section class="wrap">
        <div class="container">
            <fifth-section-body/>
        </div>
    </section>
</template>

<script>
    import FifthSectionBody from "@/components/AppFifthSection/FifthSectionBody/FifthSectionBody";
    export default {
        name: "AppFifthSection",
        components: {FifthSectionBody}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>