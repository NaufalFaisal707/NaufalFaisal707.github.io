module.exports = {
    webBrandName: 'Naufal.f',
    webBrandUrl: '#',
    webBrandPic: require('../asset/img/Page.png'),
    ownerName: '<span class="txt-danger">Naufal</span> Faisal',
    ownerBio: [`Hai!, Saya [nama]`, 'sekarang saya berumur [umur] tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan editing.'],
    ownerBirthYear: 2005,
    ownerSocial: {
        facebook:   '',
        instagram:  '',
        twitter:    '',
        git:        ''
    },
    ownerContact: {
        email: '',
        telegram:   '',
    },
    ownerHobbies: 'satir 👊😎',


    // function
    ownerAge: function(){
        return new Date().getFullYear() - this.ownerBirthYear
    },
    webTitle: function(){
        return `${this.webBrandName} Web Portpolio`
    }
}
