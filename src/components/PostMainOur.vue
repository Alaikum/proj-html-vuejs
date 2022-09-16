<template>
    <div class="box" :class="post.id===1? 'box__purple':''">
        <h3>{{post.title}}</h3>
        <p class=" sub__title common__text">{{post.subTitle}}</p>
        <div class="price__box">
            <span class="commont__text">{{post.currency}}</span>
            <p class="price__shadow">{{post.price}}</p>
            <p class="price">{{post.price}}</p>
            <span class="time">{{post.time}}</span>
        </div>
        <ul class="common__text">
            <li>Creative <span>{{post.creative}}</span></li>
            <li>Vibrant <span>{{post.vibrant}}</span></li>
            <li>Eye <span></span>{{post.eye}}</li>
            <li>Extreme <span>{{post.extreme}}</span></li>
            <li>Exceptional <span>{{post.exceptional}}</span></li>

        </ul>
        <div class="button__post">

            <p class="button common__text " :class="post.id===1? 'white__button':'purple__button'">Order Now
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" />
            </p>
        </div>
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

<style lang="scss" scoped>
    @import "../style/general.scss";
.box {
    color: white;
    width: 512px;
    // height: 753px;
    overflow: hidden;
    background-color: white;
    color: black;
    border-radius: 30px;
    position: relative;
    padding-bottom: 60px;

    h3 {
        font-size: 45px;
        padding: 50px 0 25px;
    }

    .sub__title {
        padding-bottom: 40px;
    }

    .price__box {



        .price__shadow {
            position: absolute;
            font-size: 345px;
            font-weight: 700;
            line-height: 100px;
            // color: rgba(255, 255, 255, .12);
            color: rgba(0, 0, 0, .08);
            top: 70px;
            right: -10px;

        }

        .price {
            font-size: 100px;
            font-weight: 700;
            padding-bottom: 30px;



        }

    }

    ul {
        padding: 70px 0 60px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        li {
            font-weight: 700;

            span {
                font-weight: 300;
            }
        }
    }

    .button__post {
     display: flex;
     justify-content: center;
     align-items: center;
     
        .button {
            height: 50px;
            width: 180px;
            padding-top: 16px;
            font-weight: 700;
          




        }
    }

}
.box.box__purple{
    background: rgb(247, 97, 107);
    background: linear-gradient(270deg, rgba(247, 97, 107, 1) 0%, rgba(182, 36, 110, 1) 100%);
    color: white;

}
</style>