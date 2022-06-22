<template>
    <section class="wrap">
        <div class="container">
            <footer class="footer">
                <div class="footer__about hidden-left" style="--delay:0.6" v-on-page>
                    <div class="footer__about-logo">
                        <img src="@/assets/01_Header/logo.svg" alt="">
                    </div>
                    <div class="footer__about-text">
                        Lorem ipsum dolor sit amet, consectetur adipin elit. A eleifend tristique condimentum vestibulum, ornare tortor viverra.
                    </div>
                </div>
                <div class="footer__info hidden-left" style="--delay:0.4" v-on-page>
                    <a href="#" @click.prevent="" class="footer__info-title">Company</a>
                    <a href="#" @click.prevent="" class="footer__info-item">About Us</a>
                    <a href="#" @click.prevent="" class="footer__info-item">FAQ</a>
                    <a href="#" @click.prevent="" class="footer__info-item">Contact us</a>
                </div>
                <div class="footer__info hidden-left" style="--delay:0.2" v-on-page>
                    <a href="#" @click.prevent="" class="footer__info-title">News</a>
                    <a href="#" @click.prevent="" class="footer__info-item">Features</a>
                    <a href="#" @click.prevent="" class="footer__info-item">Testimonial</a>
                    <a href="#" @click.prevent="" class="footer__info-item">Help</a>
                </div>
                <div class="footer__info hidden-left" style="--delay:0.0" v-on-page>
                    <div class="footer__info-title">Socials</div>
                    <div class="footer__info-socials">
                        <img src="@/assets/04_Footer/01_Social.svg" alt="">
                        <img src="@/assets/04_Footer/02_Social.svg" alt="">
                        <img src="@/assets/04_Footer/03_Social.svg" alt="">
                    </div>
                </div>
            </footer>
        </div>
        <img class="el el-01" style="--i:17" src="@/assets/02_Hero/01.svg" alt=""/>
        <img class="el el-02" style="--i:15" src="@/assets/02_Hero/02.svg" alt=""/>
        <img class="el el-06" style="--i:11" src="@/assets/02_Hero/03.svg" alt=""/>
        <img class="el el-07" style="--i:14" src="@/assets/02_Hero/07.svg" alt=""/>
        <img class="el el-08" style="--i:16" src="@/assets/02_Hero/08.svg" alt=""/>
        <img class="el el-11" style="--i:11" src="@/assets/02_Hero/11.svg" alt=""/>
        <img class="el el-12" style="--i:16" src="@/assets/02_Hero/12.svg" alt=""/>
    </section>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>