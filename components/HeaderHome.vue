<template>
    <div class="header-container">
        <img src="~/static/data/img/logo-restaurant-1.png" alt="logo restaurant">
    </div>
</template>

<style scoped lang="scss">
    .header-container {
        @include center-total;
        background-color: $c--secondary;
        img {
            padding: 0.5em;
            width: auto;
            height: 100px;
        }
    }

</style>