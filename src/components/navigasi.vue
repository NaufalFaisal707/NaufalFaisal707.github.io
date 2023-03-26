<template>
    <nav :class="[scroll ? 'bg-dra-comment bg-opacity-30 shadow-lg' : '']" class="fixed z-50 w-[100vw] backdrop-blur-sm duration-200 ease-out">
        <div class="max-w-me relative mx-auto h-14 lg:max-w-7xl">
            <ul class="absolute top-0 bottom-0 my-auto flex h-max gap-x-10 duration-150 ease-out md:gap-x-6">
                <li v-for="nav in navigasi">
                    <a class="flex gap-x-2" :href="'#' + nav.indeks">
                        <i :class="nav.kelas"></i>
                        <span class="hidden sm:block">{{ nav.indeks }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        props: ["namaWeb"],
        data() {
            return {
                navigasi: [
                    { indeks: "beranda", kelas: "fa fa-house bg-gradient-to-br from-dra-purple to-dra-cyan bg-clip-text font-bold text-transparent" },
                    { indeks: "keahlian", kelas: "fa fa-wand-magic-sparkles bg-gradient-to-br from-dra-orange to-dra-yellow bg-clip-text text-transparent" },
                    { indeks: "proyek", kelas: "fa fa-diagram-project bg-gradient-to-br from-dra-cyan to-dra-green bg-clip-text text-transparent" },
                ],
                scroll: false,
            };
        },
        mounted() {
            window.addEventListener("scroll", this.pageBehavior);
        },
        methods: {
            pageBehavior() {
                window.pageYOffset >= 100 ? (this.scroll = true) : (this.scroll = false);
            },
        },
    };
</script>
