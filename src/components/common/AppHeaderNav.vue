<template>
    <div class="header-nav">
        <div v-for="(i,idx) in nav" :key="idx" class="nav-item" :to="i.href" :class="{select:idx==active}" @click="movePage(idx,i.href)">
            {{ i.text }}
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav:[
                {
                    text: "홈",
                    href: "/"
                },
                {
                    text: "팔로잉",
                    href: "/following"
                },
                {
                    text: "레시피",
                    href: "/recipe"
                },
                {
                    text: "생활팁",
                    href: "/lifehack"
                },
                {
                    text: "맛집",
                    href: "/restaurant"
                },
            ],
            active: 0
        }
    },
    methods:{
        change(idx){
            this.active = idx
        },
        movePage(idx,href){
            this.change(idx)
            this.$router.push(href)
        }
    }
}
</script>

<style lang="scss" scoped>
.header-nav{
    background: white;
    width: 480px;
    height: 50px;
    // font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid gray;
    .nav-item{
        width: 50px;
        height: 34px;
        display: flex;
        align-items: end;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        color: black;
        padding-bottom: 10px;
        // border-bottom: 6px solid rgb(97, 2, 129);
    }
}

.select{
    border-bottom: 6px solid rgb(97, 2, 129) !important;
}
</style>