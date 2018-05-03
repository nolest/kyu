Vue.component('xh-footer', {
    template:
        '<footer class="ds-box pack-center align-center footer">' +
            '<div class="ds-box orient-v pack-center inside">' +
                '<div class="ds-box pack-center d">' +
                    '<div class="ds-box footer_item" v-for="(item) in footer">{{ item }}</div>' +
                    '</div>' +
                '<div class="ds-box pack-center f">©2018 星汉（广州）科技有限公司 粤ICP备18011654号-1 地址：广州市越秀区三元里大道499号-523号伍福服装城1楼D区77号</div>' +
                '<div class="ds-box pack-center" @click="www"><img src="./image/www.png" style="margin-top:10px;width:30px;height:30px;cursor:pointer"/></div>'+
            '</div>' +
        '</footer>',
    data: function () {
        return {
            footer: [
                '抵制不良游戏 |',
                '拒绝盗版游戏 |',
                '注意自我保护 |',
                '谨防受骗上当 |',
                '适度游戏益脑 |',
                '沉迷游戏伤身 |',
                '合理安排时间 |',
                '享受健康生活' 
            ]
        }
    },
    props: [],
    computed: {
        
    },
    methods: {
        goto: function (item, e) {
            console.log(item);
            window.location.href = item.url;
        },
        www : function (){
            window.location.href = '/www.html'
        }
    }
})