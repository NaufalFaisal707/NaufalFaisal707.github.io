const web = require('./profile');

$(() => {
    $('style#remove').remove()

    // Page title
    document.title = web.webTitle()

    // navbar indicator
    const navItems = [
        {
            'title':'beranda',
            'color': 'drac-text-purple-cyan',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-house ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
                    <div class="text-center text-lg-start">
                        <p class="h1 fw-bold">${web.ownerBio[0].split('[nama]').join(web.ownerName)}</p>
                        <p class="fs-6">${web.ownerBio[1].split('[umur]').join(web.ownerAge())}</p>
                        <div class="fs-4 d-flex justify-content-center align-items-center justify-content-lg-start gap-5 pt-2">
                            ${web.ownerSocial.map(val => `<a href="${val.url}" aria-label="link media sosial" target="_blank" class="url drac-text-white">${val.icon}</a>`).join('')}
                        </div>                
                    </div>
                    <img class="col-10 col-sm-6 col-md-6 col-lg-6" src="${require('../asset/img/Page.png')}" alt="" srcset="">
                </div>
            `}
        },
        {
            'title':'Pendidikan',
            'color': 'drac-text-pink-purple',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-graduation-cap ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--pink), var(--purple)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="tg-vh vh-100" style="padding-top: 3.8rem">
                    <div class="h-100 d-flex flex-column justify-content-evenly align-items-center">
                        <div class="add-pad h4">${icon} ${title}</div>
                        <div class="d-flex flex-wrap flex-md-row flex-column gap-4 justify-content-between">
                        ${
                            web.person.education.map(val => `
                                <div class="border-left ps-4 py-2 pe-4" style="${border}">
                                    <div class="card-body">
                                        <h4 class="card-title ${color}">${val.year}</h4>
                                        <p class="card-text fs-5">${val.school}</p>
                                    </div>
                                </div>`)
                            .join('')
                        }
                        </div>
                    </div>
                </div>
            `}
        },
        {
            'title':'Pengalaman & Keahlian',
            'color': 'drac-text-yellow-pink',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-wand-magic-sparkles ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="tg-vh vh-100" style="padding-top: 3.8rem">
                    <div class="h-100 d-flex flex-column justify-content-evenly align-items-center">
                        <div class="add-pad h4">${icon} ${title}</div>
                        <div class="row row-cols-0 row-cols-md-2 row-cols-lg-auto g-4">
                            ${
                                web.person.skill.map(val => `
                                    <div class="col">
                                        <div class="border-left ps-4 py-2 pe-4" style="${border}">
                                            <div class="card-body">
                                                <h4 class="card-title ${color} pb-2">${val['name']}</h4>
                                                ${
                                                    val['list'].map((list) => `
                                                        <div>
                                                            <div class="fw-bold py-1">${list['name']}</div>
                                                            <ul>
                                                                <li style="font-size: 12px">Keahlian: ${list['expertise']}</li>
                                                                <li style="font-size: 12px">Pengalaman: ${list['experience']}</li>
                                                            </ul>
                                                        </div>`)
                                                    .join('')
                                                }
                                            </div>
                                        </div>
                                    </div>`)
                                .join('')
                            }
                        </div>
                    </div>
                </div>
            `}
        },
        {
            'title':'Proyek Saya',
            'color': 'drac-text-cyan-green',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-diagram-project ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--cyan), var(--green)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="tg-vh vh-100" style="padding-top: 3.8rem">
                    <div class="h-100 d-flex flex-column justify-content-evenly align-items-center">
                        <div class="add-pad h4">${icon} ${title}</div>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                        ${
                            web.person.project.map(val => `
                                <div class="col">
                                    <div class="drac-box drac-card drac-card-subtle drac-border-cyan drac-bg-pink p-3">
                                        <img src="${val}" onLoad="checkDocument()" class="img-fluid" alt="..." loading="lazy">
                                    </div>
                                </div>`)
                            .join('')
                        }
                        </div>
                    </div>
                </div>
            `}
        },
        {
            'title':'Sertifikat',
            'color': 'drac-text-yellow-pink',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-award ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="tg-vh vh-100" style="padding-top: 3.8rem">
                    <div class="h-100 d-flex flex-column justify-content-evenly align-items-center">
                        <div class="add-pad h4">${icon} ${title}</div>
                        <div class="d-flex flex-wrap flex-md-row flex-column gap-3 justify-content-between">
                            <div class="drac-bg-black-secondary drac-rounded-lg py-2 px-4">Konten belum tersedia</div>
                        </div>
                    </div>
                </div>
            `}
        },
        {
            'title':'Kontak Saya',
            'color': 'drac-text-purple-cyan',
            'icon': {
                'name': (color) => `<i class="fa-solid fa-headset ${color}"></i>`,
                'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
            },
            'structure': function(icon, border, title, color){return`
                <div class="tg-vh vh-100" style="padding-top: 3.8rem">
                    <div class="h-100 d-flex flex-column justify-content-evenly align-items-center">
                        <div class="add-pad h4">${icon} ${title}</div>
                        <div class="d-flex flex-wrap flex-md-row flex-column gap-3 justify-content-between">
                            <div class="drac-bg-black-secondary drac-rounded-lg py-2 px-4">Konten belum tersedia</div>
                        </div>
                    </div>
                </div>
            `}
        },
    ]
    
    // Body structure
    const body = $('body')
    body.attr({
        'data-bs-spy': 'scroll',
        'data-bs-target': '#mynav',
    
    }).addClass('user-select-none drac-bg-black drac-text-white drac-text')

    // navbar
    body.html(`
    <nav id="mynav" class="navbar fixed-top navbar-expand-xl navbar-dark">
        <div class="container">
            <a class="navbar-brand drac-bg-animated brand-clip" href="#">${web.webBrandName}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${
                        navItems.map((val, inx) => {return`
                            <li class="nav-item">
                                <a class="nav-link" style="${val['icon']['border-color']}" href="#page${inx}">
                                    ${val['icon']['name'](val['color'])} ${val['title']}
                                </a>
                            </li>`
                        }).join('')
                    }
                </ul>
            </div>
        </div>
    </nav>
    `)
    
    // body
    $.each(navItems, function(inx, val){
        body.append(`<section class="container" id="page${inx}">${val['structure'](val['icon']['name'](val['color']), val['icon']['border-color'], val['title'], val['color'])}</section>`)
    })
})

// page script
$(window).scroll(function(){
    window.pageYOffset >= 100
        ? $('nav').addClass('shadow').css({
            'transition': '.2s',
            'background-color': 'var(--blackSecondary)'
        })
    : $('nav').removeClass('shadow').css('background-color', 'transparent')
})