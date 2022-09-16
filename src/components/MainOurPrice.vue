<template>
  <div class="container">
    <div class="main__our">
      <p class="common__text purple">Price List</p>
      <h3 class="title">
        Our Pricing
      </h3>
      <p class="common__text">When, while the lovely valley teems with vapour around meand the meridian sun
        strikes the upper surface</p>
    </div>
    <div class="post__ourPrice">

      <div class="post__card" v-for="post in posts" :key="post.price">

        <PostMainOur :post='post' />
      </div>
    </div>
  </div>
</template>
  
<script>
import PostMainOur from './PostMainOur.vue';
import posts from '../postsMain';
export default {
  data() {
    return {
      posts
    }
  },
  components: { PostMainOur }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";
.container{
position: relative;
height: 800px;
  .main__our {
    color: $--main-color;
  // max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 0 90px;
  
  .purple {
    color: $--purple-color;
    
  }
  
  .title {
    font-size: 60px;
    padding: 40px 0;
  }
}

.post__ourPrice {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  position: absolute;
}
// .post__card:nth-child(2n) {
  // background-color: black !important;
  // }
}
</style>
