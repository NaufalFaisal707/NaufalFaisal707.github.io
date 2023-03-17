<script setup>
    defineProps({
        dataMentah: Object,
    });
</script>

<template>
    <section id="pendidikan" class="container flex flex-col items-center justify-evenly gap-4 duration-500 ease-in-out">
        <text class="text-base md:text-2xl">
            <i class="fa fa-graduation-cap bg-gradient-to-br from-dra-cyan to-dra-comment bg-clip-text text-transparent"></i>
            Pendidikan
        </text>
        <div class="grid grid-cols-4 gap-4">
            <div v-for="pendidikan in dataMentah.pendidikan" class="rounded-md bg-dra-comment px-24 py-16">{{ pendidikan.namaSekolah }} {{ pendidikan.tahunBelajar }}</div>
        </div>
    </section>
</template>
