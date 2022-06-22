<template>
    <div id="progress-bar" :style="{height: progress + '%'}"></div>
    <div id="scroll-path"></div>
</template>

<script>
    export default {
        name: "AppScrollBar",
        data() {
            return {
                progressHeight: 0
            }
        },
        computed: {
          progress() {
              return this.progressHeight
          }
        },
        mounted() {
            window.onscroll = () => {
                console.log('scroll')
                this.progressHeight = window.pageYOffset / (document.body.scrollHeight - window.innerHeight) * 100
            }
        }
    }
</script>

<style lang="scss" scoped>
    @use "style";
</style>