<script setup>
    import proyek from "./components/proyek.vue";
    import navigasi from "./components/navigasi.vue";
    import keahlian from "./components/keahlian.vue";
    import beranda from "./components/beranda.vue";
</script>

<template>
    <navigasi :nama-web="namaWeb" />
    <beranda />
    <keahlian />
    <proyek />
</template>

<script>
    export default {
        mounted() {
            document.title = `${this.namaWeb} Web Portfolio`;
        },
        data() {
            return {
                namaWeb: "Naufal.f",
            };
        },
    };
</script>
