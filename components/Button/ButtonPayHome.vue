<template>
    <div>
      <!-- Disable and change class of link if inactive table -->
      <NuxtLink
        :to="`${paramsOptions.fullPath}/identification`"
        tag="button"
        :class="{ disabled : !active }"
        class="btn btn-fill" :disabled="!active">
          Payer l'addition
      </NuxtLink>
    </div>
</template>

<script>
export default {
    name: "ButtonPayHome",
    // props
    props: {
      active: Boolean,
    },
  data() {
    return {
      paramsOptions : {
        // Get path for specific restaurant and table
        fullPath : this.$route.path
      },
    }
  },
}
</script>

<style lang="scss">
  .disabled {
    background-color: gray !important;
    border: grey !important;
  }
</style>
