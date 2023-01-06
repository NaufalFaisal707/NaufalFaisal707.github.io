const web = require('./profile');

$(() => {
    $('style#remove').remove()

    // Page title
    document.title = web.webTitle()

    // navbar indicator
    const navItems = [
        {
            'name':'beranda',
            'icon': {
                'name': '<i class="fa-solid fa-house drac-text-purple-cyan"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center',
                'element': function(){
                    return`
                    <div class="text-center text-lg-start">
                        <p class="h1 fw-bold">${web.ownerBio[0].split('[nama]').join(web.ownerName)}</p>
                        <p class="fs-6">${web.ownerBio[1].split('[umur]').join(web.ownerAge())}</p>
                        <div class="fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2">
                            ${web.ownerSocial.map(val => `<a href="${val.url}" aria-label="link media sosial" target="_blank" class="url drac-text-white">${val.icon}</a>`).join('')}
                        </div>                
                    </div>
                    <img class="col-10 col-sm-6 col-md-6 col-lg-6" src="${web.webBrandPic}" alt="" srcset="">
                    `
                },
            }
        },
        {
            'name':'Pendidikan',
            'icon': {
                'name': '<i class="fa-solid fa-graduation-cap drac-text-pink-purple"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--pink), var(--purple)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
                'element': function(name, icon){
                    return`
                    <div class="h4 py-4 py-md-0">
                        ${icon} ${name}
                    </div>
                    <div class="d-flex justify-content-center flex-wrap gap-5">
                    ${
                        web.person.education.map(val => `
                        <div variant="subtle" class="drac-box drac-card drac-card-subtle drac-border-white drac-bg-white drac-p-md">
                                <div class="card-img-top school-image rounded" style="${val.picURL}"></div>
                                <div class="card-body">
                                    <h4 class="card-title drac-text-pink-purple">${val.year}</h4>
                                    <p class="card-text fs-5">${val.school}</p>
                                </div>
                            </div>
                        `).join('')
                    }
                    </div>`
                }
                ,
            }
        },
        {
            'name':'Kemampuan & Keahlian',
            'icon': {
                'name': '<i class="fa-solid fa-wand-magic-sparkles drac-text-yellow-pink"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
                'element': function(name, icon){
                    return`
                    <div class="h4 py-4 py-md-0">
                        ${icon} ${name}
                    </div>
                    `
                },
            }
        },
        {
            'name':'Proyek Saya',
            'icon': {
                'name': '<i class="fa-solid fa-diagram-project drac-text-cyan-green"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--cyan), var(--green)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
                'element': function(name, icon){
                    return`
                    <div class="h4 py-4 py-md-0">
                        ${icon} ${name}
                    </div>
                    `
                },
            }
        },
        {
            'name':'Sertifikat',
            'icon': {
                'name': '<i class="fa-solid fa-award drac-text-yellow-pink"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--yellow), var(--pink)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
                'element': function(name, icon){
                    return`
                    <div class="h4 py-4 py-md-0">
                        ${icon} ${name}
                    </div>
                    `
                },
            }
        },
        {
            'name':'Kontak Saya',
            'icon': {
                'name': '<i class="fa-solid fa-headset drac-text-purple-cyan"></i>',
                'border-color': 'border-image: linear-gradient(135deg,var(--purple), var(--cyan)) 10;'
            },
            'structure': {
                'class': 'vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad',
                'element': function(name, icon){
                    return`
                    <div class="h4 py-4 py-md-0">
                        ${icon} ${name}
                    </div>
                    `
                },
            }
        },
    ]
    
    // Body structure
    const body = $('body')
    body.attr({
        'data-bs-spy': 'scroll',
        'data-bs-target': '#mynav',
    
    }).addClass('user-select-none')

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
                        navItems.map((val, inx) => {
                            return `<li class="nav-item"><a class="nav-link" style="${val['icon']['border-color']}" href="#page${inx}">${val['icon']['name']} ${val['name']}</a></li>`
                        }).join('')
                    }
                </ul>
            </div>
        </div>
    </nav>
    `)
    
    // body
    $.each(navItems, function(inx, val){
        body.append(`<section class="container" id="page${inx}"><div class="${val['structure']['class']}">${val['structure']['element'](val['name'], val['icon']['name'])}</div></section>`)
    })
})

// page script
$(window).scroll(function(){
    (window.pageYOffset >= 100)
        ? $('nav').addClass('shadow').css({
            'transition': '.2s',
            'background-color': 'var(--blackSecondary)'
        })
    : $('nav').removeClass('shadow').css('background-color', 'transparent')
})

// body.append(`<section id="page${inx}"/>`)
// inx === 0
//     ? $(`section#page${inx}`).addClass('container')
//     .html(`
//     <div class="vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
//         <div class="text-center text-lg-start">
//             <p class="h1">
//                 ${web.ownerBio[0].split('[nama]').join(web.ownerName)}
//             </p>
//             <p class="fs-6">
//                 ${web.ownerBio[1].split('[umur]').join(web.ownerAge())}
//             </p>
//             <div class="fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2">
//                 ${
//                     web.ownerSocial.map(val => {
//                         return `
//                             <a href="${val.url}" aria-label="link media sosial" target="_blank" class="url drac-text-white">${val.icon}</a>
//                             `
//                     }).join('')
//                 }
//             </div>                
//         </div>
//         <img class="col-10 col-sm-6 col-md-6 col-lg-6" src="${web.webBrandPic}" width="auto" height="auto" alt="" srcset="">
//     </div>
//     `)
        
// : $(`section#page${inx}`).addClass('container')
// .html(`
// <div class="min-vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad">
//     <div class="h4 py-4 py-md-0">
//         ${val['icon']} ${val['name']}
//     </div>
//     <div class="d-flex justify-content-center flex-wrap gap-5">
//     ${
//         inx === 1
//         ? web.person.education.map(val => {
//             return `
            // <div variant="subtle" class="drac-box drac-card drac-card-subtle drac-border-white drac-bg-white drac-p-md">
            //     <div class="card-img-top school-image rounded" style="${val.picURL}"></div>
            //     <div class="card-body pt-4">
            //         <h4 class="card-title drac-text-pink">${val.year}</h4>
            //         <p class="card-text fs-5">${val.school}</p>
            //     </div>
            // </div>
//             `
//         }).join('')
//     : inx === 1
//         ? `<div>jancok pristel</div>`
//     : ``
//     }
//     </div>
// </div>
// `)
// })

