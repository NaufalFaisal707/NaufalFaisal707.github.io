<template>
    <nav :class="[scroll ? 'bg-dra-comment bg-opacity-30 shadow-lg' : '']" class="fixed z-50 w-[100vw] backdrop-blur-sm duration-200 ease-out">
        <div class="max-w-me relative mx-auto h-14 lg:max-w-7xl">
            <text class="absolute left-0 top-0 bottom-0 my-auto h-max text-xl">{{ namaWeb }}</text>
            <button @click="toggleMenu" class="absolute right-0 top-0 bottom-0 my-auto block h-max text-xl md:hidden">
                <i v-if="menuOpen" class="fa fa-xclose text-lg"></i>
                <i v-else class="fa fa-bar"></i>
            </button>
            <div :class="[scroll && pageMedium ? 'bg-dra-comment bg-opacity-30 shadow-lg' : '']" class="absolute right-0 top-20 bottom-auto my-auto h-max overflow-hidden rounded-md duration-150 ease-out md:bottom-0 md:top-0">
                <ul :class="[menuOpen ? 'h-max p-4' : 'h-0']" class="flex flex-col gap-6 duration-150 ease-out md:h-max md:flex-row">
                    <li v-for="nav in navigasi">
                        <a :href="'#' + nav.indeks">
                            <i :class="nav.kelas"></i>
                            {{ nav.indeks }}
                        </a>
                    </li>
                </ul>
            </div>
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
                pageMedium: false,
                menuOpen: false,
            };
        },
        mounted() {
            window.addEventListener("scroll", this.pageBehavior);
            window.addEventListener("resize", this.pageBehavior);
            this.pageBehavior;
        },
        methods: {
            toggleMenu() {
                this.menuOpen = !this.menuOpen;
            },
            pageBehavior() {
                window.pageYOffset >= 100 ? (this.scroll = true) : (this.scroll = false);
                window.innerWidth < 768 ? (this.pageMedium = true) : (this.pageMedium = false);
            },
        },
    };
</script>
