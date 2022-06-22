<template>
    <section class="row">
        <div class="row__body body">
            <h1 class="body__title hidden-left" v-on-page="'_active'">Make a big splash in the app world</h1>
            <div class="body__text hidden-left" v-on-page="'_active'">He scratched it tickety boo harry the cras bargy chap mush spiffing spend a penny the full monty burke butty.</div>
            <ul class="body__list">
                <li class="body__list_item hidden-left" v-on-page="'_active'">

                    <h3 class="body__list_title"><span>1</span>Carefully designed</h3>
                    <p class="body__list_text">Apps are broadly classified into three types: native apps, hybrid and web apps.</p>
                </li>
                <li class="body__list_item hidden-left" v-on-page="'_active'">
                    <h3 class="body__list_title"><span>2</span>User Interactive</h3>
                    <p class="body__list_text">Native applications are designed specifically for a mobile operating system, typically iOS or Android.</p>
                </li>
            </ul>
        </div>
        <div class="row__images images">
            <img src="@/assets/03_Sections/01_Mobile.png" alt="" class="images__first hidden-right" v-on-page="'_active'"/>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SecondSectionBody"
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>