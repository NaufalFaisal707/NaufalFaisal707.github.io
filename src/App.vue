<script setup>
    import navigasi from './components/navigasi.vue'
    import beranda from './components/beranda.vue'
    import pendidikan from './components/pendidikan.vue'
</script>

<template>
    <navigasi :navigasi="scroll"/>
    <beranda :dataMentah="profil"/>
    <pendidikan :dataMentah="profil"/>
    <!-- <section id="keahlian" class="container">
        <div v-for="link in profil.linkLoba">{{ link.name }}</div>
    </section> -->
</template>

<script>

const profil = {
    namaWeb: 'Naufal.f',
    namaPembuat: 'Naufal Faisal',
    tanggalUlangTahun: '2005-05-24',
    ulangTahun: function(){
        return Math.floor((new Date().getTime() - new Date(this.tanggalUlangTahun).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    },
    linkSosial: [
        {name: 'facebook', url: 'https://www.facebook.com/naufal.faisal.707/', icon: 'fa fa-facebook'},
        {name: 'instagram', url: 'https://www.instagram.com/naufal.faisal.31/', icon: 'fa fa-instagram'},
        {name: 'twitter', url: 'https://twitter.com/NaufalFaisal31/', icon: 'fa fa-twitter'},
        {name: 'github', url: 'https://github.com/NaufalFaisal707/', icon: 'fa fa-github'},
    ],
    pendidikan: [
        {namaSekolah: 'SDS Binamuslimin', tahunBelajar: '2010 - 2016'},
        {namaSekolah: 'SMP KP Ciparay', tahunBelajar: '2017 - 2019'},
        {namaSekolah: 'SMK 2 LPPM-RI Majalaya', tahunBelajar: '2020 - 2023'},
    ]
}

document.title = `${profil.namaWeb} Web Portfolio`

export default {
    created() {
        window.addEventListener('scroll', this.windowScroll);
        window.addEventListener('resize', this.windowResize);
        window.innerWidth <= 768 ? this.screenMedium = true : this.screenMedium = false
    },
    data() {
        return {
            scroll: false,
            screenMedium: false,
            menuActive: false,
        }
    },
    methods: {
        windowScroll() {
            window.pageYOffset >= 100 ? this.scroll = true : this.scroll = false
        },
        windowResize() {
            window.innerWidth <= 768 ? this.screenMedium = true : this.screenMedium = false
        }
    }
}
</script>