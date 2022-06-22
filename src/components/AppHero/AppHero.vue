<template>
    <section class="wrap">
        <div class="container">
            <app-header/>
            <hero-body/>
            <img class="el el-01" style="--i:17" src="@/assets/02_Hero/01.svg" alt=""/>
            <img class="el el-02" style="--i:15" src="@/assets/02_Hero/02.svg" alt=""/>
            <img class="el el-03" style="--i:10" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-04" style="--i:12" src="@/assets/02_Hero/04.svg" alt=""/>
            <img class="el el-05" style="--i:9" src="@/assets/02_Hero/05.svg" alt=""/>
            <img class="el el-06" style="--i:11" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-07" style="--i:14" src="@/assets/02_Hero/07.svg" alt=""/>
            <img class="el el-08" style="--i:16" src="@/assets/02_Hero/08.svg" alt=""/>
            <img class="el el-09" style="--i:7" src="@/assets/02_Hero/09.svg" alt=""/>
            <img class="el el-10" style="--i:14" src="@/assets/02_Hero/10.svg" alt=""/>
            <img class="el el-11" style="--i:11" src="@/assets/02_Hero/11.svg" alt=""/>
            <img class="el el-12" style="--i:16" src="@/assets/02_Hero/12.svg" alt=""/>
            <img class="el el-13" style="--i:13" src="@/assets/02_Hero/13.svg" alt=""/>
        </div>
    </section>
</template>

<script>
    import AppHeader from "@/components/AppHeader/AppHeader";
    import HeroBody from "@/components/AppHero/HeroBody/HeroBody";
    export default {
        name: "AppHero",
        components: {HeroBody, AppHeader}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>