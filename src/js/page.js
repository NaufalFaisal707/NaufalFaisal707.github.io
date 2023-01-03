const web = require('./profile');

$(() => {
    $('style#remove').remove()

    // Page title
    document.title = web.webTitle()

    // navbar indicator
    const navItems = [
        {'name':'beranda', 'icon':'<i class="fa-solid fa-house"></i>'},
        {'name':'Pendidikan', 'icon':'<i class="fa-solid fa-graduation-cap"></i>'},
        {'name':'Kemampuan & Keahlian', 'icon':'<i class="fa-solid fa-wand-magic-sparkles"></i>'},
        {'name':'Proyek Saya', 'icon':'<i class="fa-solid fa-diagram-project"></i>'},
        {'name':'Sertifikat', 'icon':'<i class="fa-solid fa-award"></i>'},
        {'name':'Kontak Saya', 'icon':'<i class="fa-solid fa-headset"></i>'},
    ]
    
    // Body structure
    const body = $('body')
    body.attr({
        'data-bs-spy': 'scroll',
        'data-bs-target': '#mynav',
    }).addClass('user-select-none')
    // navbar
    body.html(`
    <nav id="mynav" class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Naufal.f</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    ${navItems.map((val, inx) => {
                        return `
                            <li class="nav-item">
                                <a class="nav-link" href="#page${inx}">
                                    ${val['icon']} ${val['name']}
                                </a>
                            </li>`
                    }).join('')}
                </ul>
            </div>
        </div>
    </nav>
    `)
    
    // body
    $.each(navItems, function(inx, val){
        body.append(`<section id="page${inx}"/>`)
        inx === 0
            ? $(`section#page${inx}`).addClass('container')
            .html(`
            <div class="vh-100 d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center">
                <div class="text-center text-lg-start">
                    <p class="h1">
                        ${web.ownerBio[0].split('[nama]').join(web.ownerName)}
                    </p>
                    <p class="fs-6">
                        ${web.ownerBio[1].split('[umur]').join(web.ownerAge())}
                    </p>
                    <div class="fs-4 d-flex justify-content-center justify-content-lg-start gap-5 pt-2">
                        ${
                            web.ownerSocial.map(val => {
                                return `
                                    <a href="${val.url}" aria-label="link media sosial" target="_blank" class="url drac-text-white">${val.icon}</a>
                                    `
                            }).join('')
                        }
                    </div>                
                </div>
                <img class="col-10 col-sm-6 col-md-6 col-lg-6" src="${web.webBrandPic}" width="auto" height="auto" alt="" srcset="">
            </div>
            `)
                
        : $(`section#page${inx}`).addClass('container')
        .html(`
        <div class="min-vh-100 d-flex flex-column justify-content-md-evenly align-items-center auto-pad">
            <div class="h4 py-4 py-md-0">
                ${val['icon']} ${val['name']}
            </div>
            <div class="d-flex justify-content-center flex-wrap gap-5">
            ${
                inx === 1
                ? web.person.education.map(val => {
                    return `
                    <div variant="subtle" class="drac-box drac-card drac-card-subtle drac-border-white drac-bg-white drac-p-md">
                        <div class="card-img-top school-image rounded" style="${val.picURL}"></div>
                        <div class="card-body pt-4">
                            <h4 class="card-title drac-text-pink">${val.year}</h4>
                            <p class="card-text fs-5">${val.school}</p>
                        </div>
                    </div>
                    `
                }).join('')
            : inx === 1
                ? `<div>jancok pristel</div>`
            : ``
            }
            </div>
        </div>
        `)
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

                    // `
                    //     <div class="card bg-transparent border-start border-5 text-primary" style="width: 20rem">
                            // <div class="card-img-top school-image"></div>
                            // <div class="card-body">
                            //     <h4 class="card-title txt-pink">${val.year}</h4>
                            //     <p class="card-text fs-5">${val.school}</p>
                            //     <button class="drac-btn drac-bg-purple drac-btn-outline drac-text-purple">Outline</button>
                            // </div>
                    //     </div>
                    // `

    // inx === 0
    //     ? (function(){
    //         $(`section#${inx}`).append('<div class="container"/>').ready(() => {
    //             $('section div.container').append('<div class="vh-100 d-flex flex-lg-row flex-column-reverse justify-content-center align-items-center"/>').ready(() => {
    //                 const ctn0 = $('section div.container div.vh-100')
    //                 ctn0.append('<span class="text-center text-lg-start"/>').ready(() => {
    //                     const text0 = $('section span.text-center')
    //                     text0.append('<p class="h1"/>').ready(() => $('section span p.h1').html(web.ownerBio[0].split('[nama]').join(web.ownerName)))
    //                     text0.append('<p class="fs-6"/>').ready(() => $('section span p.fs-6').html(web.ownerBio[1].split('[umur]').join(web.ownerAge())))
    //                 })
    //                 ctn0.append(`<img class="col-10 col-md-8 col-lg-6" src="${web.webBrandPic}" alt="" srcset="">`)
    //             })
    //         })
    //     }())
    // : $(`section#${inx}`).addClass('vh-100 container').text('anjay coy')
    // .ready(() => {
        //     $('nav.navbar').append('<div class="container"/>').ready(() => {
            //         const navContaienr = $('nav div.container')
            //         navContaienr.append('<a class="navbar-brand"/>').ready(() => $('nav a.navbar-brand').text(web.webBrandName).attr('href', web.webBrandUrl))
    //         navContaienr.append('<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"/>').ready(() => $('nav button.navbar-toggler').append('<span class="navbar-toggler-icon"/>'))
    //         navContaienr.append('<div class="collapse navbar-collapse" id="navbarNav"/>').ready(() => {
    //             $('nav div.collapse').append('<ul class="navbar-nav ms-auto"/>').ready(() => {
    //                 $.each(navItems, function(inx, val){
    //                     $('nav ul.navbar-nav').append(`<li class="nav-item"><a class="nav-link" href="#${inx}"><i class="fa-solid ${val['icon']}"></i> ${val['name']}</a></li>`)
    //                 })
    //             })
    //         })
    //     })
    // })      
        




    // $('body')
    //     .children('nav')
    //         .text('anjay coy').addClass('h1')
})