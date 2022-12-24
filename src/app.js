require('./css/default.css');
require('bootstrap/dist/js/bootstrap.bundle')
const web = require('./js/profile');

$(() => {

    // Page title
    document.title = web.webTitle()

    // Body structure
    $('body')
        .addClass('bg-dark bg-opacity-10')
        .html('<nav></nav>')
        .append(Array(4).fill('<div></div>'))

    // nav
    $('body')
        .children('nav')
            .text('anjay coy')
    

    // console.log(web.ownerAge());
    // div
    // console.log($('body').children('div'))

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