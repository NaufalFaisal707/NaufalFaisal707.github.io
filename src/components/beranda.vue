<template>
    <section id="beranda" class="container flex flex-col-reverse items-center justify-center gap-4 duration-500 ease-in-out md:flex-row md:justify-between">
        <div class="z-50 grid gap-4">
            <text class="text-center text-2xl font-bold sm:text-3xl md:text-start lg:text-4xl">
                <span class="before:content-['Hai'] after:content-['_saya_']">,</span>
                <span @mouseenter="ownerHover = true" @mouseleave="ownerHover = false" class="relative">
                    <text class="dra-rainbow bg-clip-text transition-all duration-150 ease-in hover:text-transparent">{{ namaPembuat }}</text>
                    <text :class="[ownerHover ? 'opacity-30' : 'opacity-0']" class="dra-rainbow absolute top-0 bottom-0 left-0 -z-50 bg-clip-text blur-sm transition-all duration-150 ease-in hover:text-transparent">{{ namaPembuat }}</text>
                </span>
            </text>
            <p class="text-center text-[12px] sm:text-[15px] md:text-start lg:text-base">sekarang saya berumur {{ umur() }} tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan multimedia.</p>
            <ul class="flex items-center justify-center gap-4 text-[10px] sm:text-[12px] md:justify-start lg:text-base">
                <li class="hidden sm:block">
                    <a href="#" class="rounded-md border-2 py-2 px-4 shadow-md duration-200 ease-in-out hover:border-transparent hover:bg-dra-pink hover:shadow-dra-pink">Proyek Saya</a>
                </li>
                <li v-for="sosial in linkSosial">
                    <a target="_blank" :href="sosial.link"><i :title="sosial.mediaSosial" :class="sosial.ikon" class="p-2 text-[18px] transition-all duration-200 ease-in-out hover:text-dra-pink md:text-2xl"></i></a>
                </li>
            </ul>
        </div>
        <span style="transform-style: preserve-3d" @mouseenter="heroHover = true" @mouseleave="heroHover = false" alt="" class="relative w-[80%] p-[4%] sm:w-[380px] md:w-[120%] lg:w-[80%]" ref="heroTilt">
            <img style="transform: translateZ(26px)" src="../img/hero/aku_esemka.png" alt="" width="" class="z-10" />
            <img :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(50px)" src="../img/hero/suprize.webp" alt="" width="" class="absolute left-[12%] top-[12%] z-20 h-[16%] delay-75 duration-200 ease-out lg:h-[20%]" />
            <img :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(100px)" src="../img/hero/laptop.webp" alt="" width="" class="absolute top-[24%] right-[8%] z-20 h-[20%] duration-200 ease-in lg:h-[24%]" />
            <img @click="play" @mouseleave="stop" :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(140px)" src="../img/hero/teriri_bg.png" alt="" width="" class="absolute bottom-[10%] left-[16%] z-20 h-[16%] cursor-help duration-200 ease-out lg:bottom-16 lg:h-[20%]" />
            <img style="transform: perspective(1000px)" src="../img/hero/bg-purple.svg" alt="" width="" class="absolute top-0 bottom-0 right-0 left-0 z-0 my-auto mx-auto h-[50%]" />
            <img style="transform: perspective(1000px)" :class="[heroHover ? 'opacity-40' : 'opacity-0']" src="../img/hero/bg-purple.svg" alt="" width="" class="absolute top-0 bottom-0 right-0 left-0 z-0 my-auto mx-auto h-[50%] blur-2xl" />
        </span>
    </section>
</template>

<script>
    import vTilt from "vanilla-tilt";
    import { useSound } from "@vueuse/sound";

    import interactive from "../sound/teriri/interactive.mp3";
    import dontTouch from "../sound/teriri/dontTouch.mp3";
    import moodBadag from "../sound/teriri/moodBadag.mp3";
    import mood from "../sound/teriri/mood.mp3";
    export default {
        setup() {
            const { play, stop } = useSound(interactive, {
                interrupt: true,
            });

            return {
                play,
                stop,
            };
        },
        mounted() {
            vTilt.init(this.$refs.heroTilt, this.tConfig);
        },
        data() {
            return {
                namaPembuat: "Naufal Faisal",
                tanggalUlangTahun: "2005-05-24",
                linkSosial: [
                    { mediaSosial: "facebook", link: "https://www.facebook.com/naufal.faisal.707/", ikon: "fa fa-facebook" },
                    { mediaSosial: "instagram", link: "https://www.instagram.com/naufal.faisal.31/", ikon: "fa fa-instagram" },
                    { mediaSosial: "twitter", link: "https://twitter.com/NaufalFaisal31/", ikon: "fa fa-twitter" },
                    { mediaSosial: "github", link: "https://github.com/NaufalFaisal707/", ikon: "fa fa-github" },
                ],
                umur: function () {
                    return Math.floor((new Date().getTime() - new Date(this.tanggalUlangTahun).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
                },
                iniKlik: () => console.log("yamete~~ >_<"),
                heroHover: false,
                ownerHover: false,
                tConfig: {
                    max: 4,
                    scale: 1.05,
                },
            };
        },
    };
</script>
