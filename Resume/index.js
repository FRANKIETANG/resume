$(document).ready(function () {
    var data = [{
            id: 0,
            title: "QQ 音乐",
            description: "一个原生 JS 写出来的 QQ 音乐移动端单页应用。",
            previewUrl: "./images/QQ-music.png",
            demoUrl: "https://frankietang.github.io/qq-music/index.html",
            category: "frontend"
        },
        {
            id: 1,
            title: "React-TodoList",
            description: "一个 React 写出来的待办事项移动端单页应用。",
            previewUrl: "./images/React-todolist.png",
            demoUrl: "https://frankietang.github.io/react-todolist/build/index.html",
            category: "frontend"
        },
        {
            id: 2,
            title: "Vue-Resume",
            description: "一个 Vue.js 写出来的在线编辑简历页面。",
            previewUrl: "./images/vue-resume.png",
            demoUrl: "https://frankietang.github.io/vue-resume/dist/index.html",
            category: "frontend"
        },
        {
            id: 3,
            title: "企业整站",
            description: "一个用自己写的轮子拼凑出来的企业整站。",
            previewUrl: "./images/推了么.png",
            demoUrl: "https://frankietang.github.io/wheels/FE-engineering/tuilime-webpack/index.html",
            category: "frontend"
        }
    ]










    var frontend = data.filter(function (item) {
        return item.category === 'frontend'
    })

    function removeActiveClass() {
        $('.center').find('a').each(function (i, el) {
            if ($(el).hasClass('active')) {
                $(el).removeClass('active')
            }
        })
    }

    function removeOpenClass() {
        $('.container').each(function (i, el) {
            if ($(el).hasClass('open')) {
                $(el).removeClass('open')
            }
        })
    }

    $('.js-close').on('click', function (e) {
        e.preventDefault()
        removeActiveClass()
        $('.center').animate({
            opacity: '0'
        }, 100)
        removeOpenClass()
        $('.close-arrow').hide()
    })

    $('.js-open-about').on('click', function (e) {
        e.preventDefault()
        removeOpenClass()
        $('.about').addClass('open')
        $('.close-arrow').show(600)
        $('.center').animate({
            opacity: '1'
        }, 500)
        removeActiveClass()
        $('.center').find('.js-open-about').addClass('active')
    })

    $('.js-open-works').on('click', function (e) {
        e.preventDefault()
        removeOpenClass()
        $('.works').addClass('open')
        $('.close-arrow').show(600)
        $('.center').animate({
            opacity: '1'
        }, 500)
        removeActiveClass()
        $('.center').find('.js-open-works').addClass('active')
    })

    $('.js-open-contact').on('click', function (e) {
        e.preventDefault()
        removeOpenClass()
        $('.contact').addClass('open')
        $('.close-arrow').show(600)
        $('.center').animate({
            opacity: '1'
        }, 500)
        removeActiveClass()
        $('.center').find('.js-open-contact').addClass('active')
    })

    $('.js-get-qq').on('click',function(e){
        e.preventDefault()
        swal({
            title: '来扫我呀!',
            text: '欢迎聊骚哈哈哈哈',
            imageUrl: 'https://i.loli.net/2017/09/30/59ce9d60add05.jpg',
            imageWidth: 256,
            imageHeight: 351,
            imageAlt: 'Custom image',
            animation: false
        })
    })

    $('.js-get-wechat').on('click',function(e){
        e.preventDefault()
        swal({
            title: '来扫我呀!',
            text: '欢迎聊骚哈哈哈哈',
            imageUrl: 'https://i.loli.net/2017/09/30/59ce9d60a5191.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
        })
    })

    function generateCard(data) {
        var title = data.title
        var desc = data.description
        var imgUrl = data.previewUrl
        var demoUrl = data.demoUrl
        return (`
            <li class="card animated zoomIn">
                <div class="card-media">
                    <img src="${imgUrl}" alt="#">
                </div>
                <div class="card-content">
                    <h4>${title}</h4>
                    <p>${desc}</p>
                </div>
                <div class="card-actions">
                    <a target="_blank" href="${demoUrl}" class="view-demo">在线预览</a>
                </div>
            </li>
        `)
    }

    function renderToDom(data) {
        data.forEach(function (item) {
            var card = generateCard(item)
            $('.js-list').append(card)
        })
    }

    renderToDom(frontend)
})

$.backstretch([
    "https://i.loli.net/2017/09/30/59ce98ad3694d.jpg",
    "https://i.loli.net/2017/09/30/59ce98ad51929.jpg"
],{
    duration: 5000,
    fade: 'slow'
})