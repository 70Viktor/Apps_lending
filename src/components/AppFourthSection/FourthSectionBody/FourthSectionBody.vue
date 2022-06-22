<template>
    <section class="wrap">
        <div class="title hidden-bottom" v-on-page>Our Testimonial</div>
        <div class="text hidden-bottom" v-on-page>Most mobile devices are sold with several apps bundled as pre-installed software, such as a web browser</div>
        <div class="row">
            <div class="card hidden-left" v-on-page>
                <img src="@/assets/03_Sections/03_stars.svg" alt="" class="card__mark">
                <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ante pharetra, at pharetra quam in. Aenean urna dolor bibendum volutpat, sit</div>
                <div class="card__title">Benjamin Evalent</div>
                <div class="card__subtitle">CEO-Founder</div>
            </div>
            <div class="card hidden-right" v-on-page>
                <img src="@/assets/03_Sections/03_stars.svg" alt="" class="card__mark">
                <div class="card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ante pharetra, at pharetra quam in. Aenean urna dolor bibendum volutpat, sit</div>
                <div class="card__title">Shahriar Sohag</div>
                <div class="card__subtitle">CEO-Founder</div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "FourthSectionBody"
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>