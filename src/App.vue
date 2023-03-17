<script setup>
    import navigasi from "./components/navigasi.vue";
    import beranda from "./components/beranda.vue";
    import pendidikan from "./components/pendidikan.vue";
    import keahlian from "./components/keahlian.vue";
</script>

<template>
    <navigasi />
    <beranda />
    <!-- <pendidikan :dataMentah="profil" /> -->
    <keahlian />
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

<!-- <script>
    const profil = {
        namaWeb: "Naufal.f",
        namaPembuat: "Naufal Faisal",
        tanggalUlangTahun: "2005-05-24",
        umur: function () {
            return Math.floor((new Date().getTime() - new Date(this.tanggalUlangTahun).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
        },
        linkSosial: [
            { mediaSosial: "facebook", link: "https://www.facebook.com/naufal.faisal.707/", ikon: "fa fa-facebook" },
            { mediaSosial: "instagram", link: "https://www.instagram.com/naufal.faisal.31/", ikon: "fa fa-instagram" },
            { mediaSosial: "twitter", link: "https://twitter.com/NaufalFaisal31/", ikon: "fa fa-twitter" },
            { mediaSosial: "github", link: "https://github.com/NaufalFaisal707/", ikon: "fa fa-github" },
        ],
        keahlian: {
            multimedia: [
                { aplikasi: "after effect", belajarDariTahun: "2019", sampai: "sekarang", pemahaman: "70%" },
                { aplikasi: "premiere pro", belajarDariTahun: "2022", sampai: "sekarang", pemahaman: "15%" },
                { aplikasi: "ilustrator", belajarDariTahun: "2023", sampai: "sekarang", pemahaman: "12%" },
                { aplikasi: "photoshop", belajarDariTahun: "2020", sampai: "sekarang", pemahaman: "40%" },
                { aplikasi: "audation", belajarDariTahun: "2021", sampai: "sekarang", pemahaman: "30%" },
            ],
            // teknologi: [{ catatan: "mampu mengoperasikan OS berbasis Microsoft windows, linux (arch, ubuntu), dan android dengan baik" }, { catatan: "" }],
        },
        kumpulanProyek: {
            multimedia: [{ gambar: "", judul: "", deskripsi: "" }],
        },
    };

    document.title = `${profil.namaWeb} Web Portfolio`;

    export default {
        created() {
            window.addEventListener("scroll", this.windowScroll);
            window.addEventListener("resize", this.windowResize);
            window.innerWidth <= 768 ? (this.screenMedium = true) : (this.screenMedium = false);
        },
        data() {
            return {
                scroll: false,
                screenMedium: false,
                menuActive: false,
                iniKlik: () => console.log("yamete~~ >_<"),
                heroHover: false,
                ownerHover: false,
            };
        },
        methods: {
            windowScroll() {
                window.pageYOffset >= 100 ? (this.scroll = true) : (this.scroll = false);
            },
            windowResize() {
                window.innerWidth <= 768 ? (this.screenMedium = true) : (this.screenMedium = false);
            },
        },
    };
</script> -->
