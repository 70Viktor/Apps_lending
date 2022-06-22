<template>
    <div class="wrap">
        <div class="container">
            <third-section-body/>
            <img src="@/assets/03_Sections/02_back.png" alt="" class="background">
            <img class="el el-01" style="--i:17" src="@/assets/03_Sections/1.svg" alt=""/>
            <img class="el el-02" style="--i:15" src="@/assets/03_Sections/2.svg" alt=""/>
            <img class="el el-03" style="--i:10" src="@/assets/03_Sections/3.svg" alt=""/>
            <img class="el el-04" style="--i:12" src="@/assets/03_Sections/2.svg" alt=""/>
            <img class="el el-05" style="--i:9" src="@/assets/02_Hero/05.svg" alt=""/>
            <img class="el el-06" style="--i:11" src="@/assets/02_Hero/03.svg" alt=""/>
            <img class="el el-09" style="--i:7" src="@/assets/02_Hero/09.svg" alt=""/>
            <img class="el el-10" style="--i:14" src="@/assets/02_Hero/10.svg" alt=""/>
            <img class="el el-11" style="--i:11" src="@/assets/02_Hero/11.svg" alt=""/>
            <img class="el el-12" style="--i:16" src="@/assets/02_Hero/12.svg" alt=""/>
            <img class="el el-13" style="--i:13" src="@/assets/02_Hero/13.svg" alt=""/>
        </div>
    </div>
</template>

<script>
    import ThirdSectionBody from "@/components/AppThirdSection/ThirdSectionBody/ThirdSectionBody";
    export default {
        name: "AppThirdSection",
        components: {ThirdSectionBody}
    }
</script>

<style lang="scss" scoped>
@use "style";
</style>