<template>
  <div>
    <HeaderLogo/>
    <main>
      <h1>Les Restaurants</h1>
      <!-- listing of all restaurants -->
      <div v-for="restaurant in allRestaurants" :key="restaurant.id">
        <details>
          <summary>{{restaurant.name}}</summary>
          <!-- listing of all tables of each restaurant -->
          <ul v-for="table in restaurant.tables" :key="table.id">
            <li>
              <!-- Dynamic route = (QR Code routes) -->
              <NuxtLink class="link" :to="`${restaurant.id}/${table.id}`">
                {{ ' table : ' + table.number }}
              </NuxtLink>
              <hr>
            </li>
          </ul>
        </details>
      </div>
    </main>
  </div>
</template>

<script>
// import fake datas
import {restaurants} from '~/static/data/restaurants.json'

export default {
  data() {
    return {
      allRestaurants: restaurants,
    };
  },
}
</script>

<style lang="scss">
  details {
    margin: 0 auto;
    width: 90%;
    border-radius: 54px;
    font-family: "Axiforma";
    padding: 1em;
    color: #fff;
    background-color: $c--primary;
    margin-bottom: 20px;
    summary {
      padding: 0.3em;
    }
  }
  details[open] {
    padding: unset;
    border: 1px solid $c--primary;
    background-color: #fff;
    border-radius: 20px;
    summary {
      border-radius: 20px 20px 0 0;
      padding: 0.5em;
      background-color: $c--primary;
      &::marker {
        width: 20px;
        padding: 0.3em;
      }
    }
    ul {
      li {
        padding: 1em;
        .link {
          color: $c--primary;
        }
      }
    }
  }
</style>

