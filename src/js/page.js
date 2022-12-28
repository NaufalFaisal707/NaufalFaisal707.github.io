const web = require('./profile');

$(() => {
    $('style#remove').remove()

    // Page title
    document.title = web.webTitle()

    // navbar indicator
    const navItems = [
        {'name':'beranda', 'icon':'fa-house'},
        {'name':'Pendidikan', 'icon':'fa-graduation-cap'},
        {'name':'Kemampuan & Keahlian', 'icon':'fa-wand-magic-sparkles'},
        {'name':'Proyek Saya', 'icon':'fa-diagram-project'},
        {'name':'Sertifikat', 'icon':'fa-award'},
        {'name':'Kontak Saya', 'icon':'fa-headset'},
    ]
    
    // Body structure
    const body = $('body')
    // navbar
    body.html(`
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Naufal.f</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto"></ul>
            </div>
        </div>
    </nav>
    `)
    $.each(navItems, function(inx, val){
        $('nav ul.navbar-nav').append(`<li class="nav-item"><a class="nav-link" href="#${inx}"><i class="fa-solid ${val['icon']}"></i> ${val['name']}</a></li>`)
    })
    
    // body
    $.each(navItems, function(inx, val){
        body.append(`<section id="${inx}"/>`)
    })
    
    
    
    
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