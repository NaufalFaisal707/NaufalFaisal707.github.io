<script setup>
defineProps({
    navigasi: Number,
})
</script>

<template>
    <nav id="navbar" :class="[scroll ? 'bg-dra-curent-line shadow-sm' : '']" class="transition ease-in delay-50 fixed w-[100%]">
        <div class="container flex justify-between items-center h-14">
            <text class="text-xl">Naufal.f</text>
            <!-- <button @focusin="menuActive = true" @focusout="menuActive = false">{{ menuActive }}</button> -->
            <button @click="menuActive = menuActive ? false : true" class="transition ease-in delay-50 md:hidden inline-block p-1 border-gray-400 text-gray-400 hover:text-dra-foreground">
                <XMarkIcon :class="[menuActive ? '' : 'hidden']" class="h-8 w-8" />
                <Bars3Icon :class="[menuActive ? 'hidden' : '']" class="h-8 w-8" />
            </button>
            <ul class="flex hidden md:inline-block">
                <li><a href="#">{{ scroll }}</a></li>
                <li><a href="#">{{ navigasi }}</a></li>
            </ul>
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
            window.pageYOffset >= 100
            ? this.scroll = true
            : this.scroll = false
        }
    }
}
</script>
