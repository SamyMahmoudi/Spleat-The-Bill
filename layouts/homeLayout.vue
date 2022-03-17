<template>
    <div id="app">
        <HeaderHome />
        <main>
            <Nuxt/>
        </main>
        <FooterHome />
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
    #app {
        height: 100vh;
        @include column;
    }
    main {
        flex : 1;
    }
</style>