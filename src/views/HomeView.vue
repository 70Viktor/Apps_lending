<template>
    <app-hero/>
    <app-howto-use/>
    <app-second-section/>
    <app-third-section/>
    <app-fourth-section/>
    <app-fifth-section/>
    <app-footer/>
</template>

<script>

import AppHero from "@/components/AppHero/AppHero";
import AppHowtoUse from "@/components/AppHowtoUse/AppHowtoUse";
import AppSecondSection from "@/components/AppSecondSection/AppSecondSection";
import AppThirdSection from "@/components/AppThirdSection/AppThirdSection";
import AppFourthSection from "@/components/AppFourthSection/AppFourthSection";
import AppFifthSection from "@/components/AppFifthSection/AppFifthSection";
import AppFooter from "@/components/AppFooter/AppFooter";
export default {
    name: 'HomeView',
    components: {AppFooter, AppFifthSection, AppFourthSection, AppThirdSection, AppSecondSection, AppHowtoUse, AppHero},
}

</script>

<style scoped>
</style>