module.exports = {
    ownerName: 'Naufal Faisal',
    ownerBio: 'kata\" mutiara',
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


    // function
    ownerAge: function(){
        return new Date().getFullYear() - this.ownerBirthYear
    },
    webTitle: function(){
        return `${this.ownerName} Web Portpolio`
    }
}
