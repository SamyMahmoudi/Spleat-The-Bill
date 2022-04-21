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
  main h1 {
    text-align: center;
    margin-bottom: 30px;
  }
  details {
    margin: 0 auto 30px;
    width: 90%;
    border-radius: 20px;
    font-family: "Axiforma";
    padding: 0.75em;
    color: #fff;
    background-color: $c--primary;
    summary {
      padding: 0.3em;
      &::marker {
        list-style-position: inside;
      }
    }
  }
  details[open] {
    padding: unset;
    border: 1px solid $c--primary;
    background-color: #fff;
    border-radius: 20px;
    summary {
      border-radius: 20px 20px 0 0;
      padding: 1em;
      background-color: $c--primary;
      &::marker {
        width: 20px;
        padding: 0.3em;
      }
    }
    ul {
      li {
        font-weight: bold;
        padding: 0 1em;
        a {
          display: block;
          margin: 0.75em 0;
        }
        .link {
          color: $c--primary;

        }
        
      }

      hr {
        border: none;
        border-top: 1px solid $c--primary;
      }
      &:last-child hr {
          display:none;
      }
    }
  }
</style>

