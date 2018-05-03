Vue.component('xh-header', {
    template:
        '<section class="ds-box pack-center header">' +
        '<div class="ds-box inside flex-1 pack-justify align-center">' +
        '<div class="ds-box">' +
        '<img style="margin-top:8px;" src="./image/logo_250x120.png" alt="<h1>星汉科技</h1>"/>' +
        '</div>' +
        '<div class="ds-box flex-1 align-center pack-end taps_con">' +
        '<div class="ds-box align-center taps" v-for="(item,index) in tapses" @click.prevent="goto(item,$event)" :class="{ cur : item.cur }">{{ item.text }}</div>' +
        '</div>' +
        '</div>' +
        '</section>',
    data: function () {
        return {
            taps: [
                { text: '官网首页', url: '/', page: 'index', cur: false },
                { text: '关于星汉', url: '/about.html', page: 'about', cur: false },
                { text: '联系我们', url: '/contact.html', page: 'contact', cur: false },
                { text: '充值中心', url: '/charge.html', page: 'charge', cur: false },
                { text: '客服中心', url: '/kef.html', page: 'kef', cur: false },
                { text: '家长监护', url: '/protect.html', page: 'protect', cur: false }
            ]
        }
    },
    props: ['curpage'],
    computed: {
        tapses: function () {
            console.log('1')
            for (var a in this.taps) {
                if (this.taps[a].page == this.curpage) {
                    this.taps[a].cur = true
                }
            }
            return this.taps
        }
    },
    methods: {
        goto: function (item, e) {
            console.log(item);
            window.location.href = item.url;
        }
    }
})