module.exports = {
    webBrandName: 'Naufal.f',
    ownerName: '<span class="drac-text-red drac-bg-animated clip">Naufal</span> Faisal',
    ownerBio: [`Hai!, Saya [nama]`, 'sekarang saya berumur [umur] tahun, dan saya senang mempelajari sesuatu yang berhubugnan dengan perkembangan teknologi, programing dan editing.'],
    ownerBirthYear: 2005,
    ownerSocial: [
        {icon: '<i class="bi bi-facebook"></i>', url: 'https://www.facebook.com/naufal.faisal.707/'},
        {icon: '<i class="bi bi-instagram"></i>', url: 'https://www.instagram.com/naufal.faisal.31/'},
        {icon: '<i class="bi bi-twitter"></i>', url: 'https://twitter.com/NaufalFaisal31/'},
        {icon: '<i class="bi bi-github"></i>', url: 'https://github.com/NaufalFaisal707/'}
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
        skill: [
            {
                'name': 'Multimedia',
                'list': [
                    {
                        'name': 'After Effect',
                        'experience': '70%',
                        'expertise': '68%'
                    },
                    {
                        'name': 'Premiere Pro',
                        'experience': '28%',
                        'expertise': '20%'
                    },
                    {
                        'name': 'Photoshop',
                        'experience': '52%',
                        'expertise': '62%'
                    },
                    {
                        'name': 'Lightroom Classic',
                        'experience': '28%',
                        'expertise': '40%'
                    },
                    {
                        'name': 'Audation',
                        'experience': '35%',
                        'expertise': '28%'
                    },
                    {
                        'name': 'Inkscape',
                        'experience': '57%',
                        'expertise': '58%'
                    },
                ]
            },
            {
                'name': 'Pemograman',
                'list': [
                    {
                        'name': 'HTML',
                        'experience': '52%',
                        'expertise': '73%'
                    },
                    {
                        'name': 'CSS',
                        'experience': '40%',
                        'expertise': '69%'
                    },
                    {
                        'name': 'Javascript',
                        'experience': '73%',
                        'expertise': '64%'
                    },
                ]
            },
            {
                'name': 'Fotografi',
                'list': [
                    {
                        'name': '-',
                        'experience': '-',
                        'expertise': '-'
                    },
                ]
            },
        ],
        project: [
            require('../asset/img/project/6d073bc1-04c6-49d8-939a-eaafc5e761c8.jpeg'),
            require('../asset/img/project/42a3b95a-d7c7-44a0-ba4f-5b4363f463a0.jpeg'),
            require('../asset/img/project/b2862728-b9cb-4dbe-b2ff-9d46e0fb2eb0.jpeg'),
            require('../asset/img/project/e5ba216f-62bd-419e-9a77-99e563ca0966.jpeg'),
            require('../asset/img/project/ea3d3eb3-193d-41ae-9e5e-4650a6db1b0c.jpeg'),
        ]
    },

    // function
    ownerAge: function(){
        return new Date().getFullYear() - this.ownerBirthYear
    },
    webTitle: function(){
        return `${this.webBrandName} Web Portpolio`
    }
}
