<template>
  <router-view/>
  <app-scroll-bar/>
</template>

<script>
  import AppScrollBar from "@/components/UI-kit/scrollBar/AppScrollBar";
  export default {
    components: {AppScrollBar}
  }
</script>

<style lang="scss">
  *{padding: 0;margin: 0;border: 0; font-family: 'Lato', sans-serif;}
  *,*:before,*:after{-moz-box-sizing: border-box;-webkit-box-sizing: border-box;box-sizing: border-box;}
  :focus,:active{outline: none;}
  a:focus,a:active{outline: none;}
  nav,footer,header,aside{display: block;}
  html,body{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;}
  input,button,textarea{font-family:inherit;}
  input::-ms-clear{display: none;}
  button{cursor: pointer;}
  button::-moz-focus-inner{padding:0;border:0;}
  a,a:visited{text-decoration: none;}
  a:hover{text-decoration: none;}
  ul li{list-style: none;}
  img{vertical-align: top;}
  h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight: inherit;}
    ::-webkit-scrollbar
    {
      display: none;
    }

  .hidden-left {
    opacity: 0 !important;
    transform: translate(-100%, 0);
    transition: 0.7s ease-out;
  }
  .hidden-right {
    opacity: 0 !important;
    transform: translate(100%, 0);
    transition: 0.7s ease-out;
  }
  .hidden-bottom {
    opacity: 0 !important;
    transform: translate(0, 100%);
    transition: 0.7s ease-out;
  }

  ._active {
    transition-delay: calc(1s * var(--delay));
    opacity: unset !important;
    transform: translate(0, 0);
  }
</style>
