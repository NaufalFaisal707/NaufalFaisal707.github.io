<template>
    <navigasi :navigasi="data.tes"/>
    <bagian :bagian="data.bagian"/>
</template>

<script>
    import navigasi from './components/nav.vue'
    import bagian from './components/section.vue'

    const komponenWeb = {
        tes: 123,
        bagian: 321
    }

    export default {
        data: function(){
            return {
                data: komponenWeb
            }
        },
        components: {
            navigasi,
            bagian
        }
    }
</script>