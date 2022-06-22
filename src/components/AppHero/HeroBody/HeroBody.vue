<template>
    <section class="row">
            <div class="row__body body">
                <transition appear name="appear-from-left" style="--delay:0.0">
                    <div class="body__title">Applications for the future</div>
                </transition>
                <transition appear name="appear-from-left" style="--delay:0.3">
                <div class="body__text">Mobile apps were originally offered for general productivity and information retrieval, including email, calendar, contacts</div>
                </transition>
                <transition appear name="appear-from-left" style="--delay:0.6">
                    <div class="body__btns">
                        <app-btn class="download-light" text="Download App"/>
                        <app-btn class="light-border" text="About App"/>
                    </div>
                </transition>
            </div>
        <div class="row__images images">
            <transition appear name="appear-from-right" style="--delay:0.0">
                <img src="@/assets/02_Hero/first.png" alt="" class="images__first"/>
            </transition>
            <transition appear name="appear-from-right" style="--delay:0.6">
                <img src="@/assets/02_Hero/second.png" alt="" class="images__second"/>
            </transition>
        </div>
    </section>
</template>

<script>
    import AppBtn from "@/components/UI-kit/btn/AppBtn";
    export default {
        name: "HeroBody",
        components: {AppBtn}
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>