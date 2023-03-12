<script setup>
    defineProps({
        dataMentah: Object,
    })
</script>

<template>
    <section id="beranda" class="container ease-in-out duration-500 flex md:flex-row flex-col-reverse md:justify-between justify-center items-center gap-4">
        <div class="grid gap-4">
            <text class="lg:text-4xl sm:text-3xl text-2xl md:text-start text-center font-bold">Hai<span class="cursor-help" title="click?">,</span> Saya <span class="bg-clip-text transition-all ease-in-out duration-150 hover:text-transparent dra-rainbow">{{ dataMentah.namaPembuat }}</span></text>
            <p class="lg:text-base sm:text-[15px] text-[12px] md:text-start text-center">sekarang saya berumur {{ dataMentah.ulangTahun() }} tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan multimedia.</p>
            <ul class="lg:text-base sm:text-[12px] text-[10px] flex md:justify-start justify-center items-center gap-4">
                <li><a href="#" class="sm:block hidden py-2 px-4 border-2 ease-in-out duration-200 hover:border-transparent hover:bg-dra-pink rounded-md">Kontak Saya</a></li>
                <li v-for="sosial in dataMentah.linkSosial"><a target="_blank" :href="sosial.url"><i :title="sosial.name" :class="sosial.icon" class="p-2 transition-all ease-in-out duration-200 hover:text-dra-pink md:text-2xl text-[18px]"></i></a></li>
            </ul>
        </div>
        <img src="../img/5d277e4afa1a623f8e74.png" alt="" class="sm:w-[380px] md:w-[46%] lg:w-[50%] w-[80%]">
    </section>
</template>