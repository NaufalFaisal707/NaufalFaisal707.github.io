<template>
    <section id="keahlian" class="container grid place-content-center justify-items-center gap-y-16 p-16 duration-500 ease-in-out">
        <text class="text-[20px] font-bold after:content-['_kemampuan_&_Keahlian'] md:text-2xl">
            <span class="relative">
                <i class="fa fa-wand-magic-sparkles absolute bg-gradient-to-br from-dra-orange to-dra-yellow bg-clip-text text-transparent opacity-50 blur-md"></i>
                <i class="fa fa-wand-magic-sparkles bg-gradient-to-br from-dra-orange to-dra-yellow bg-clip-text text-transparent"></i>
            </span>
        </text>
        <div class="flex flex-col gap-y-12">
            <div class="grid gap-y-6">
                <text class="place-self-center bg-gradient-to-br from-dra-orange to-dra-yellow bg-clip-text text-[20px] font-bold text-transparent md:place-self-auto md:text-2xl">editing</text>
                <div class="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-5">
                    <div v-for="editing in keahlian.editing" class="text-[14px] md:text-base lg:text-xl">
                        <text class="bg-gradient-to-br from-dra-orange to-dra-yellow bg-clip-text font-bold text-transparent">{{ editing.aplikasi }}</text>
                        <div class="flex gap-x-3 pl-[2px] pt-2">
                            <div class="flex">
                                <div :style="`height: ${editing.pemahaman}`" class="w-[2px] bg-gradient-to-br from-dra-orange to-dra-yellow"></div>
                            </div>
                            <ul class="list-inside text-[12px] sm:text-[14px] md:text-[16px]">
                                <li>{{ editing.pemahaman }} pemahaman.</li>
                                <li>{{ editing.belajarDariTahun }} - {{ editing.sampai }}.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                keahlian: {
                    editing: [
                        { aplikasi: "after effect", belajarDariTahun: "2019", sampai: "sekarang", pemahaman: "78%" },
                        { aplikasi: "premiere pro", belajarDariTahun: "2022", sampai: "sekarang", pemahaman: "24%" },
                        { aplikasi: "ilustrator", belajarDariTahun: "2023", sampai: "sekarang", pemahaman: "16%" },
                        { aplikasi: "photoshop", belajarDariTahun: "2020", sampai: "sekarang", pemahaman: "60%" },
                        { aplikasi: "Lightroom", belajarDariTahun: "2022", sampai: "sekarang", pemahaman: "46%" },
                        { aplikasi: "audation", belajarDariTahun: "2021", sampai: "sekarang", pemahaman: "30%" },
                    ],
                },
            };
        },
    };
</script>
