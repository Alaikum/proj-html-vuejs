<template>
    <div class="container">
        <figure><img :src="require(`../assets/${post.avatar}`)" alt=""></figure>
        <div class="rate">
            <div class="rate__background">"</div>
            <span v-for="(n, id) in post.rate" :key="id">
                <font-awesome-icon icon="fa-solid fa-star" />
            </span>
            <span v-for="(n, id) in (5-post.rate)" :key="id+19">
                <font-awesome-icon icon="fa-regular fa-star" />
            </span>
        </div>
        <p>{{post.comment}}</p>
        <h4>
            {{post.nickName}}
        </h4>
        <p>{{post.job}}</p>



    </div>
</template>
  
<script>
export default {

    props: {
        post: {
            type: Object
        }
    },

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.container {

    figure {
        img {
            max-width: 115px;
            aspect-ratio: 1/1;
            border: 5px solid $--purple-color;
            border-radius: 50%;
        }
    }

    .rate {
        padding: 55px 0 40px;
        position: relative;
        color: $--purple-color;
    }

    h4 {
        padding: 30px 0 20px;
    }

    .rate__background {
        position: absolute;
        font-size: 200px;
        font-weight: 700;
        line-height: 100px;

        color: rgba(0, 0, 0, .08);
    
        right: 40%;
        top: 80%;
        transform: rotate(10deg);

    }
}
</style>
  