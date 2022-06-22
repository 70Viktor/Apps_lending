<template>
    <div class="row">
        <div class="row__images images">
            <img src="@/assets/03_Sections/02_Mobile.png" alt="" class="images__first hidden-left" v-on-page/>
        </div>

        <div class="row__body body">
            <h1 class="body__title hidden-right" v-on-page>Innovative ideas, web solutions for business</h1>
            <div class="body__text hidden-right" v-on-page>
                <p class="body__text--p">Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps</p>
                <p class="body__text--p">Caused rapid expansion into other areas such as mobile games, factory automation</p>
            </div>
            <app-btn class="dark body__btn hidden-right" v-on-page text="Read More"/>
        </div>

    </div>
</template>

<script>
    import AppBtn from "@/components/UI-kit/btn/AppBtn";
    export default {
        name: "ThirdSectionBody",
        components: {AppBtn}
    }
</script>

<style lang="scss" scoped>
@use "style";
</style>