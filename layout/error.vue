<template>
  <div>
    <HeaderHome />
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
import HeaderHome from "~/components/HeaderHome.vue";
  export default {
    target : 'static',
    props: ["error"],
    layout: "error"
    ,
    components: { HeaderHome }
}
</script>