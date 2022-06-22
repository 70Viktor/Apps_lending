import onPage from '@/directives/onPage'

export default {
    install (Vue) {
        Vue.directive('on-page', onPage)
    }
}