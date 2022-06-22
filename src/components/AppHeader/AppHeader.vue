<template>
    <header class="row">
        <img src="@/assets/01_Header/logo.svg" class="row_logo"/>
        <ul class="row_navbar" :class="{'_active': opened}" >
            <li class="row_navbar__link _active"><a href="#">Home</a></li>
            <li class="row_navbar__link"><a href="#">Feature</a></li>
            <li class="row_navbar__link"><a href="#">Service</a></li>
            <li class="row_navbar__link"><a href="#">About</a></li>
            <li class="row_btns">
                <app-btn class="invisible" text="Login"/>
                <app-btn class="light" text="Sign up"/>
            </li>
        </ul>
    </header>
    <div class="burger" @click="openMenu" :class="{'_active': opened}"><span></span></div>
</template>

<script>
    import AppBtn from "@/components/UI-kit/btn/AppBtn";
    export default {
        name: "AppHeader",
        components: {AppBtn},
        data() {
            return {
                opened: false
            }
        },
        watch: {
            opened(newValue) {
                newValue ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
            }
        },
        methods: {
            openMenu() {
                window.scrollTo({ top: 0, behavior: 'smooth' })
                this.opened = !this.opened
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>