<template>
    <section id="proyek" class="container grid place-content-center justify-items-center gap-y-16 py-16 duration-500 ease-in-out">
        <text class="text-[20px] font-bold md:text-2xl">
            <span class="relative after:content-['_proyek_Saya']">
                <i class="fa fa-diagram-project absolute bg-gradient-to-br from-dra-cyan to-dra-green bg-clip-text text-transparent opacity-50 blur-md"></i>
                <i class="fa fa-diagram-project bg-gradient-to-br from-dra-cyan to-dra-green bg-clip-text text-transparent"></i>
            </span>
        </text>
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div v-for="item in proyek" class="relative scale-100 duration-100 ease-out hover:scale-110">
                <img loading="lazy" class="aspect-video h-[200px] w-[100%] bg-dra-curent-line" alt="" :src="item.sumber" />
                <img loading="lazy" class="absolute bottom-0 -z-50 opacity-50 blur-lg" alt="" :src="item.sumber" />
                <text class="absolute bottom-1 left-1 rounded-sm bg-dra-curent-line py-[1px] px-[4px] text-[14px]">{{ item.judul }}</text>
            </div>
        </div>
    </section>
</template>

<script>
    import proyek0 from "../img/proyek/proyek0.jpeg";
    import proyek1 from "../img/proyek/proyek1.jpeg";
    import proyek2 from "../img/proyek/proyek2.jpeg";
    import proyek3 from "../img/proyek/proyek3.jpeg";
    import proyek4 from "../img/proyek/proyek4.jpeg";
    export default {
        data() {
            return {
                proyek: [
                    { judul: "animasi logo dinas pendidikan", sumber: proyek0, deskripsi: "" },
                    { judul: "animasi logo Multimedia Crew", sumber: proyek1, deskripsi: "" },
                    { judul: "animasi bumper wisuda", sumber: proyek2, deskripsi: "" },
                    { judul: "animasi logo PT.Setara Studio", sumber: proyek3, deskripsi: "" },
                    { judul: "animasi logo PT.Chlorine Digital Media", sumber: proyek4, deskripsi: "" },
                ],
            };
        },
    };
</script>
