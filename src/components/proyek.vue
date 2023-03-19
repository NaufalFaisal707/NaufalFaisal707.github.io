<template>
    <section id="proyek" class="container grid place-content-center justify-items-center gap-y-16 p-14 duration-500 ease-in-out">
        <text class="text-[20px] font-bold md:text-2xl">
            <span class="relative after:content-['_proyek_Saya']">
                <i class="fa fa-diagram-project absolute bg-gradient-to-br from-dra-cyan to-dra-green bg-clip-text text-transparent opacity-50 blur-md"></i>
                <i class="fa fa-diagram-project bg-gradient-to-br from-dra-cyan to-dra-green bg-clip-text text-transparent"></i>
            </span>
        </text>
        <div class="">
            <img v-for="gambar in proyek" :src="gambar.sumber" alt="" />
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                proyek: [
                    { judul: "", sumber: "src/img/proyek/proyek0.jpeg", deskripsi: "" },
                    { judul: "", sumber: "src/img/proyek/proyek1.jpeg", deskripsi: "" },
                    { judul: "", sumber: "src/img/proyek/proyek2.jpeg", deskripsi: "" },
                    { judul: "", sumber: "src/img/proyek/proyek3.jpeg", deskripsi: "" },
                    { judul: "", sumber: "src/img/proyek/proyek4.jpeg", deskripsi: "" },
                ],
            };
        },
    };
</script>
