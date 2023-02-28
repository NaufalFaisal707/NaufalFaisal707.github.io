<script setup>
defineProps({
    bagian: Array,
})
</script>

<script>
    import { HomeIcon, AcademicCapIcon, SparklesIcon, SwatchIcon, DocumentIcon, PhoneIcon } from "@heroicons/vue/20/solid";
</script>

<template>
    <section v-for="item in bagian" class="container h-[100vh] pt-14" v-html="item.ikon"></section>
</template>