require('./css/default.css');
const web = require('./js/profile');

$(() => {

    // Page title
    document.title = web.title

    // Body bone
    $('body')
        .addClass('bg-dark bg-opacity-10')
        .append('<nav></nav>')
        .append(Array(4).fill('<div></div>'))

    // Body structure

    // nav
    $('body')
        .children('nav')
            .addClass('this nav')
    
    // div
    console.log($('body').children('div'))

    // $('nav')
    // $('div:nth-child(1)')
    // $('div:nth-child(2)')
    // $('div:nth-child(3)')
    // $('div:nth-child(4)')

    // for (let i = 0; i < $('body').children('div').length + 1; i++) {
    //     i == 1
    //         ? $(`div:nth-child(${i})`)
    //             .addClass(`${i}`)
    //     : i == 2
    //         ? $(`div:nth-child(${i})`)
    //             .addClass(`${i}`)
    //     : i == 3
    //         ? $(`div:nth-child(${i})`)
    //             .addClass(`${i}`)
    //     : i == 4 
    //         ? $(`div:nth-child(${i})`)
    //             .addClass(`${i}`)
    //     : 0
    // }
})