<template>
  <div>

    <HeaderPrice />
    <!-- listing of all restaurants -->
    <div v-for="restaurant in allRestaurants" :key="restaurant.id">
      <!-- listing of all tables of each restaurant -->
      <ul v-for="table in restaurant.tables" :key="table.id">

        <li>
          <!-- Dynamic route = (QR Code routes) -->
          <NuxtLink :to="`${restaurant.id}/${table.id}`">
            {{ restaurant.name + ' table : ' + table.number }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants.json'
import HeaderPrice from '~/components/HeaderPrice.vue';

export default {
    data() {
        return {
            allRestaurants: restaurants,
        };
    },
    components: { HeaderPrice }
}
</script>

