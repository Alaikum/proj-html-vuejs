<template>

    <div>
        <figure>
            <img :src="require(`../assets/${card.img}`)" alt="nope">

        </figure>
        <h3>
            {{card.title}}
        </h3>
        <p class="common__text">
            {{card.text}}
        </p>
    </div>

</template>


<script>
export default {
    props: {
        card: {
            type: Object
        }
    },
}

</script>


<style lang="scss" scoped>
@import "../style/general.scss";
div{
text-align: center;
    figure {
        img {
            height: 140px;
        }
    }
    h3{
        padding: 75px 0 40px;
        font-size: 24px;
    }
}
</style>