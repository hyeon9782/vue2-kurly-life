<template>
    <div class="header-nav">
        <router-link v-for="i in nav" :key="i.text" class="nav-item" :to="i.href">
            {{ i.text }}
        </router-link>
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
            ]
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
    .nav-item{
        text-decoration: none;
        color: black;
    }
}
</style>