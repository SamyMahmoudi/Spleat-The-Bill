<template>
    <div id="PageWrapper">
        <HeaderRecap />

        <h2 class="title">Mon repas</h2>

    </div>
</template>

<script>
export default {
    data() {
        return {
            iconPlat: "icon-plat.png",
            iconBoisson: "icon-boisson.png"
        }
    }
}
</script>

<style lang="scss" scoped>

#PageWrapper {
    @include column;

    main {
        width: 90%;
        margin: 0 auto;
    }
}

.title {
    margin-top: 30px;
    margin-left: 20px;
}

.product
{
    &-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 10px;
    }
    &-card {
        padding: 10px 20px;
        width: 160px;
        box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
        margin: 10px;
        text-align: center;
        position: relative;
        img {
            width: 120px;
        }
    }
}

.add
{
    &-product {
        width: 160px;
        height: 235px;
        margin: 10px;
        @include center-total;
        flex-direction: column;
    }
    &-container {
        width: 40px;
        height: 40px;
        border-radius: 99px;
        background-color: $c--primary;
        @include center-total;
        margin-bottom: 15px;
    }
    &-icon {
        color: white;
        font-size: 40px;
        font-weight: 900;
        border-radius: 15px;
    }
    &-text {
        width: 70%;
        text-align: center;
    }
}


</style>
