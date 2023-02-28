<script setup>
defineProps({
    navigasi: Array,
})
</script>

<template>
    <nav id="navbar" :class="[scroll ? 'bg-dra-curent-line shadow-sm' : '']" class="transition ease-in delay-50 fixed w-[100%]">
        <div class="container items-center justify-between flex h-14">
            <text class="text-xl pr-4">Naufal.f</text>
            <button @click="menuActive = !menuActive " class="transition ease-in delay-50 md:hidden inline-block p-1 border-gray-400 text-gray-400 hover:text-dra-foreground">
                <Bars3Icon v-if="menuActive" class="h-8 w-8" />
                <XMarkIcon v-else class="h-8 w-8" />
            </button>
            <div class="hidden md:inline-block">
                <ul class="flex">
                    <li><a ref="asik" class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a class="p-2" href="#">{{ scroll }}</a></li>
                    <li><a class="p-2" href="#">{{ scroll }}</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { XMarkIcon, Bars3Icon } from "@heroicons/vue/20/solid"
export default {
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll);
    },
    data(){
        return {
            scroll: false,
            menuActive: false,
        }
    },
    methods: {
        handleScroll(){
            window.pageYOffset >= 100 ? this.scroll = true : this.scroll = false
            // console.log(this.$refs);
        }
    }
}
</script>
