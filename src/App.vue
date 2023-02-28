<template>
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
    <header class="fixed w-full bg-dra-curent-line backdrop-blur bg-opacity-5">
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
    </header>
    <section class="container h-[100vh] pt-14">block</section>
    <section class="container h-[100vh] pt-14">block</section>
</template>

<script>
import { XMarkIcon, Bars3Icon, HomeIcon, SparklesIcon, SwatchIcon, DocumentIcon, PhoneIcon } from "@heroicons/vue/20/solid";

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
<script setup>defineProps()</script>