<template>

  
      <div id="map">
      <GoogleMap api-key="" style="width: 100%; height: 500px" :center="center" :zoom="10">
        <Marker :options="{ position: center }" />
      </GoogleMap>
    </div>
</template>


<script>
/*eslint-disable*/


import { GoogleMap, Marker } from "vue3-google-map";
 

export default{
  
  components: { GoogleMap, Marker },
  
  data() {
    return {
      myKey: process.env.VUE_APP_MYKEY,
      map: '',
      lat: 19.42847,
      lng: -99.12766
    }
  },
  
  setup() {
    const center = { lat:19.42847, lng: -99.12766 };

    return {
      center
      }
  },

  methods: {
    test() {
      console.log(this.lat)
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
