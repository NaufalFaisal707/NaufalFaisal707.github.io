<template>
    <section id="beranda" class="container flex flex-col-reverse items-center justify-center gap-x-4 gap-y-10 duration-500 ease-in-out md:flex-row md:justify-between">
        <div class="z-40 grid gap-4">
            <text class="text-center text-2xl font-bold sm:text-3xl md:text-start lg:text-4xl">
                <span class="before:content-['Hai'] after:content-['_saya_']">,</span>
                <text :class="[heroHover ? 'text-transparent' : '']" class="dra-rainbow bg-clip-text transition-all duration-150 ease-in">{{ namaPembuat }}</text>
            </text>
            <p class="text-center text-[12px] before:content-['sekarang_saya_berumur_'] after:content-['_tahun,_dan_saya_senang_mempelajari_sesuatu_yang_berhubungan_dengan_perkembangan_teknologi,_programing_dan_multimedia.'] sm:text-[15px] md:text-start lg:text-base">{{ umur() }}</p>
            <ul class="flex items-center justify-center gap-4 text-[10px] sm:text-[12px] md:justify-start lg:text-base">
                <li class="hidden sm:block">
                    <a href="#proyek" class="rounded-md border-2 py-2 px-4 duration-200 ease-in-out hover:border-transparent hover:bg-dra-pink">Proyek Saya</a>
                </li>
                <li v-for="sosial in linkSosial">
                    <a target="_blank" :href="sosial.link"><i :title="sosial.mediaSosial" :class="sosial.ikon" class="p-2 text-[24px] transition-all duration-200 ease-in-out hover:text-dra-pink md:text-2xl"></i></a>
                </li>
            </ul>
        </div>
        <span style="transform-style: preserve-3d" @mouseenter="heroHover = true" @mouseleave="heroHover = false" alt="" class="relative w-[80%] p-[4%] sm:w-[380px] md:w-[120%] lg:w-[80%]" ref="heroTilt">
            <img loading="lazy" style="transform: translateZ(26px)" src="../img/hero/saya.webp" alt="" height="500" class="z-10" />
            <img loading="lazy" :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(50px)" src="../img/hero/suprize.webp" alt="" height="" class="absolute left-[12%] top-[12%] z-20 h-[16%] delay-75 duration-200 ease-out lg:h-[20%]" />
            <img loading="lazy" :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(100px)" src="../img/hero/laptop.webp" alt="" height="" class="absolute top-[24%] right-[8%] z-20 h-[20%] duration-200 ease-in lg:h-[24%]" />
            <img loading="lazy" title="teriri >_<" @click="updatePlay" @mouseleave="stop" :class="[heroHover ? 'opacity-100' : 'opacity-0']" style="transform: translateZ(140px)" src="../img/hero/teriri_bg.webp" alt="" height="" class="absolute bottom-[10%] left-[16%] z-20 h-[16%] cursor-help duration-200 ease-out lg:bottom-16 lg:h-[20%]" />
            <img loading="lazy" style="transform: perspective(1000px)" src="../img/hero/bg.svg" alt="" height="" class="absolute top-0 bottom-0 right-0 left-0 z-0 my-auto mx-auto h-[50%]" />
            <img loading="lazy" style="transform: perspective(1000px)" :class="[heroHover ? 'opacity-40' : 'opacity-0']" src="../img/hero/bg.svg" alt="" height="" class="absolute top-0 bottom-0 right-0 left-0 z-0 my-auto mx-auto h-[50%] blur-2xl" />
        </span>
    </section>
</template>

<script>
    import vTilt from "vanilla-tilt";
    import { useSound } from "@vueuse/sound";
    import { ref } from "vue";

    import teriri from "../sound/teriri/teriri_sprite.mp3";
    export default {
        setup() {
            const sprite_teriri = [
                [0, 4800],
                [4800, 5000],
                [10000, 5000],
                [15400, 3600],
                [19000, 4300],
                [23400, 4800],
                [28600, 3700],
                [32800, 3400],
                [36200, 2600],
                [38800, 4400],
                [43400, 3200],
                [47000, 2700],
                [50000, 4000],
                [54000, 4400],
                [58600, 4800],
            ];
            const makeRef = ref(sprite_teriri[Math.floor(Math.random() * sprite_teriri.length)]);
            const { play, stop } = useSound(teriri, {
                interrupt: true,
                sprite: {
                    teriri: makeRef,
                },
                volume: 2.4,
            });
            const updatePlay = () => {
                makeRef.value = sprite_teriri[Math.floor(Math.random() * sprite_teriri.length)];
                play({ id: "teriri" });
            };
            return {
                stop,
                updatePlay,
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
                heroHover: false,
                ownerHover: false,
                tConfig: {
                    max: 4,
                    scale: 1.1,
                    gyroscope: false,
                },
            };
        },
        methods: {
            umur() {
                return Math.floor((new Date().getTime() - new Date(this.tanggalUlangTahun).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
            },
        },
    };
</script>
