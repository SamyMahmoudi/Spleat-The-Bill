<template>
    <div class="header-container">
        <svg class="arrow-previous" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 242.133 242.133" style="enable-background:new 0 0 242.133 242.133;" xml:space="preserve"><path id="XMLID_24_" d="M190.919,212.133h-69.853c-8.284,0-15,6.716-15,15s6.716,15,15,15h106.065c8.284,0,15-6.716,15-15V121.066 c0-8.284-6.716-15-15-15s-15,6.716-15,15v69.854L25.607,4.394c-5.858-5.858-15.356-5.858-21.213,0 c-5.858,5.858-5.858,15.356,0,21.213L190.919,212.133z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
        <div class="header-text">
            <h3 class="title">Récapitulatif</h3>
            <p class="text">Je dois régler</p>
            <h2 class="price">21,50 €</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderRecap",
}
</script>

<style scoped lang="scss">
    .header-container {
        height: 18vh;
        @include center-align;
        justify-content: end;
        flex-direction: column;
        background-color: $c--secondary;
        fill: white;

        .arrow-previous {
            width: 25px;
            height: auto;
            transform: rotate(135deg);
            color: white;
            position: absolute;
            top: 30px;
            left: 20px;
        }

        .header-text {
            @include center-total;
            flex-direction: column;
            p, h3, h2 {
                margin-bottom: 15px;
                color: white;
            }
            .price {
                font-size: 30px;
                font-weight: 400;
            }
        }
    }

</style>