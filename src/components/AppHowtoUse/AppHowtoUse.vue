<template>
    <section class="wrap">
        <h2 class="title hidden-bottom" v-on-page>How to use</h2>
        <div class="text hidden-bottom" v-on-page>Apps were originally intended for productivity assistance such as email, calendar, and contact databases</div>
        <div class="row">
            <div class="row__card card hidden-left" style="--delay:0.0" v-on-page>
                <app-special-btn image="00_UI/special-download.svg" class="card__btn" />
                <div class="card__title">Download</div>
                <div class="card__text">Benefit from zero server maintenance, seamless collaboration and automatic </div>
            </div>
            <div class="row__card card hidden-left" style="--delay:0.2" v-on-page >
                <app-special-btn image="00_UI/special-install.svg" class="card__btn blue" />
                <div class="card__title">Instrall App</div>
                <div class="card__text">Save tests as local files directly on your machine with no cloud-footprint to get a </div>
            </div>
            <div class="row__card card hidden-left" style="--delay:0.4" v-on-page>
                <app-special-btn image="00_UI/special-ready.svg" class="card__btn purple" />
                <div class="card__title">Ready tu use</div>
                <div class="card__text">In the Japanese language, a pronunciation, or reading, of a kanji character that was </div>
            </div>
        </div>
    </section>
</template>

<script>

    import AppSpecialBtn from "@/components/UI-kit/specialBtn/AppSpecialBtn";
    export default {
        name: "AppHowtoUse",
        components: {AppSpecialBtn}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>