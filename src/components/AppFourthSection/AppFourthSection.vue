<template>
    <section class="wrap">
        <div class="container">
            <fourth-section-body/>
            <div class="background">
            </div>
            <img class="el el-01" style="--i:17" src="@/assets/03_Sections/1.svg" alt=""/>
            <img class="el el-02" style="--i:15" src="@/assets/03_Sections/2.svg" alt=""/>
            <img class="el el-03" style="--i:10" src="@/assets/03_Sections/3.svg" alt=""/>
            <img class="el el-04" style="--i:12" src="@/assets/03_Sections/2.svg" alt=""/>
            <img class="el el-05" style="--i:09" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-06" style="--i:16" src="@/assets/02_Hero/12.svg" alt=""/>
            <img class="el el-07" style="--i:10" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-08" style="--i:15" src="@/assets/02_Hero/12.svg" alt=""/>
            <img class="el el-09" style="--i:11" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-10" style="--i:17" src="@/assets/02_Hero/12.svg" alt=""/>
        </div>
    </section>
</template>

<script>
    import FourthSectionBody from "@/components/AppFourthSection/FourthSectionBody/FourthSectionBody";
    export default {
        name: "AppFourthSection",
        components: {FourthSectionBody}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>