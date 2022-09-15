<template>
    <div class="background__nav">
        <div class="nav container">
            <figure>
                <img src="../assets/white-logo-2.png" alt="">
            </figure>
            <ul>
                <li class="active">Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Blog</li>
                <li>Conctact</li>
                <li>Portfolio</li>
                <li class="blue__button">
                    <p>Sign In</p>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../style/general.scss";

.nav {
    color: $--main-color;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;

    ul {
        margin-left: auto;
        display: flex;
        gap: 25px;
        font-size: 18px;
        font-weight: 600;
        justify-content: center;
        align-items: center;

        .active{
            color:#F9636B;
           
        }

        .blue__button {
            margin-left: 20px;
            height: 45px;
            width: 100px;

            p {
                transform: translateY(50%);
            }
        }
    }
}
</style>
  