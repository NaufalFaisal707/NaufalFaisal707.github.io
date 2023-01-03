module.exports = {
    webBrandName: 'Naufal.f',
    webBrandUrl: '#',
    webBrandPic: require('../asset/img/Page.png'),
    ownerName: '<span class="drac-text-red">Naufal</span> Faisal',
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
                picURL: `background-image: url('${require('../asset/img/pic0.jpg')}')`
            },
            {
                year: '2017 - 2019',
                school: 'SMP KP Ciparay',
                picURL: `background-image: url('${require('../asset/img/pic2.jpg')}')`
            },
            {
                year: '2020 - 2023',
                school: 'SMK 2 LPPM-RI Majalaya',
                picURL: `background-image: url('${require('../asset/img/pic1.jpg')}')`
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
