module.exports = {
    webBrandName: 'Naufal.f',
    webBrandPic: require('../asset/img/Page.png'),
    ownerName: '<span class="drac-text-red drac-bg-animated clip">Naufal</span> Faisal',
    ownerBio: [`Hai!, Saya [nama]`, 'sekarang saya berumur [umur] tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan editing.'],
    ownerBirthYear: 2005,
    ownerSocial: [
        {icon: '<i class="bi bi-facebook"></i>', url: '#'},
        {icon: '<i class="bi bi-instagram"></i>', url: '#'},
        {icon: '<i class="bi bi-twitter"></i>', url: '#'},
        {icon: '<i class="bi bi-github"></i>', url: '#'}
    ],
    ownerContact: {
        email: '',
        telegram: '',
    },
    person: {
        education: [
            {
                year: '2010 - 2016',
                school: 'SDS Binamuslimin',
            },
            {
                year: '2017 - 2019',
                school: 'SMP KP Ciparay',
            },
            {
                year: '2020 - 2023',
                school: 'SMK 2 LPPM-RI Majalaya',
            },
        ],
        skill: {
            
        }
    },


    // function
    ownerAge: function(){
        return new Date().getFullYear() - this.ownerBirthYear
    },
    webTitle: function(){
        return `${this.webBrandName} Web Portpolio`
    }
}
