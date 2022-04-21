<template>
    <div class="header-container">
      <img :src="'/data/img/logo-sans-fond.png'" alt="logo restaurant">
    </div>
</template>

<style scoped lang="scss">
    .header-container {
        @include center-total;
        padding: 1em;
        
        img {
            width: 150px;
            height: 150px;
        }
    }
</style>
