<template>
    <div class="wrap">
        <div class="title hidden-bottom" v-on-page>Download The App</div>
        <div class="text hidden-bottom" v-on-page>Apps that are not preinstalled are usually available through distribution platforms called app stores. These may operated by the owner of the device's</div>
        <div class="image hidden-bottom" v-on-page>
            <img src="@/assets/03_Sections/04_mobile.png" alt=""/>
            <div class="image-bolls">
                <img class="el el-01" style="--i:19" src="@/assets/03_Sections/1.svg" alt=""/>
                <img class="el el-02" style="--i:14" src="@/assets/03_Sections/2.svg" alt=""/>
                <img class="el el-03" style="--i:18" src="@/assets/03_Sections/3.svg" alt=""/>
                <img class="el el-04" style="--i:11" src="@/assets/03_Sections/2.svg" alt=""/>
            </div>
        </div>
        <div class="row">
            <app-btn class="download-dark hidden-left" style="--delay:0.6" text="Download App" v-on-page/>
            <app-btn class="dark-border hidden-left" style="--delay:0.3" text="About App" v-on-page/>
        </div>
    </div>
</template>

<script>
    import AppBtn from "@/components/UI-kit/btn/AppBtn";
    export default {
        name: "FifthSectionBody",
        components: {AppBtn}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>