<template>
    <section class="container flex md:flex-row flex-col md:justify-between justify-center items-center gap-4">
        <div class="grid gap-2">
            <text class="lg:text-4xl sm:text-3xl text-2xl md:text-start text-center font-bold">Hai, Saya <span class="bg-clip-text transition-all ease-in-out duration-150 cursor-help hover:text-transparent dra-rainbow">{{ profil.namaPembuat }}</span></text>
            <p class="lg:text-base sm:text-[15px] text-[12px] md:text-start text-center capitalize">sekarang saya berumur {{ ulangTahun() }} tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan multimedia.</p>
            <ul class="lg:text-base sm:text-[12px] text-[10px] pt-2 flex md:justify-start justify-center items-center gap-2">
                <a href="#" class="py-2 px-4 border-2 ease-in-out duration-150 hover:border-transparent hover:bg-dra-purple rounded-md">Kontak Saya</a>
                <li><a target="_blank" :href="profil.linkSosial.facebook" class="p-4"><i class="md:text-2xl text-[18px] fa-solid fa-facebook"></i></a></li>
                <li><a target="_blank" :href="profil.linkSosial.instagram" class="p-4"><i class="md:text-2xl text-[18px] fa-solid fa-instagram"></i></a></li>
                <li><a target="_blank" :href="profil.linkSosial.twitter" class="p-4"><i class="md:text-2xl  text-[18px] fa-solid fa-twitter"></i></a></li>
                <li><a target="_blank" :href="profil.linkSosial.github" class="p-4"><i class="md:text-2xl  text-[18px] fa-solid fa-github"></i></a></li>
            </ul>
        </div>
        <img src="./img/5d277e4afa1a623f8e74.png" alt="" class="sm:w-[380px] md:w-[46%] lg:w-[50%] w-[80%]">
    </section>
    <section class="container">tes</section>
    <section class="container">
        <i class="fa-solid fa-house"></i>
        <i class="fa-solid fa-award"></i>
        <i class="fa-solid fa-headset"></i>
        <i class="fa-solid fa-graduation-cap"></i>
        <i class="fa-solid fa-diagram-project"></i>
        <i class="fa-solid fa-wand-magic-sparkles"></i>
    </section>
</template>

<script>
import { XMarkIcon, Bars3Icon, HomeIcon, SparklesIcon, SwatchIcon, DocumentIcon, PhoneIcon } from "@heroicons/vue/20/solid";

const profil = {
    namaWeb: 'Naufal.f',
    namaPembuat: 'Naufal Faisal',
    tanggalUlangTahun: '2005-05-24',
    linkSosial: {
        instagram: 'https://www.instagram.com/naufal.faisal.31/',
        facebook: 'https://www.facebook.com/naufal.faisal.707/',
        twitter: 'https://twitter.com/NaufalFaisal31/',
        github: 'https://github.com/NaufalFaisal707/',
    }
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
            ulangTahun: () => Math.floor((new Date().getTime() - new Date(profil.tanggalUlangTahun).getTime()) / (1000 * 60 * 60 * 24 * 365.25))
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
<script setup>defineProps()</script>

<!-- pt-14 -->
    <!-- <nav id="navbar" :class="[(scroll || !menuActive && screenMedium) ? 'bg-dra-curent-line shadow-sm' : '']" class="transition ease-in delay-50 fixed w-[100%]">
        <div class="container items-center justify-between flex-col md:flex h-14">
            <text class="text-xl pr-4">Naufal.f</text>
            <button @click="menuActive = !menuActive" class="transition ease-in delay-50 md:hidden inline-block p-1 border-gray-400 text-gray-400 hover:text-dra-foreground">
                <Bars3Icon v-if="menuActive" class="icon-sm" />
                <XMarkIcon v-else class="icon-sm" />
            </button>
            <div class="">
                <ul class="flex">
                    <li><a ref="asik" class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a ref="asik" class="p-2" href="#">{{ screenMedium }}</a></li>
                </ul>
            </div>
        </div>
    </nav> -->
    <!-- <header class="fixed w-full bg-dra-curent-line backdrop-blur bg-opacity-5">
        <div class="container flex justify-between items-center h-[50px] relative">
            <a href="#" class="flex-none">aku flex</a>
            <button v-if="screenMedium">tes</button>
            <nav class="absolute right-2 sm:right-6 lg:right-8 top-14 md:top-auto">
                <ul class="flex gap-4">
                    <li class="p-2">ts</li>
                    <li class="p-2">{{ screenMedium }}</li>
                    <li class="p-2">{{ scroll }}</li>
                </ul>
            </nav>
        </div>
    </header> -->