<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" md="3" lg="3" sm="4" class>
        <p class="google-font mb-0" style="font-size:150%;color:#53900F">What we do?</p>
        <p
          class="google-font mt-0"
          style="font-size:95%"
        >WiDS Kerala is a committee of driven WiDS ambassadors working towards our global initiative to inspire and educate data scientists worldwide, regardless of gender, and support women in the field.</p>
        <p class="google-font" style="font-size:95%">WiDS Conference-Kerala is designed as a series of virtual tech talks, workshops, blogs and panel discussions.</p>
      </v-col>
      <v-col cols="12" md="9" lg="9" sm="8">
        <v-container fluid>
          <v-row>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-comment-processing</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Tech-Talks</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Learn about the latest research from the leading ladies in Data Science</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-chart-pie</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Datathons</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Get hands-on experience by solving real-world data science problems with experts</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-account-multiple-outline</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Panel Discussions</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Listen to data scientists sharing their work, advice and lessons learnt along the way</p>
            </v-col>
            <v-col md="3" lg="3" sm="6" cols="6" class="text-center pa-2">
              <v-icon large style="font-size:300%">mdi-medium</v-icon>
              <p class="google-font mt-2" style="font-size:130%">Blogs</p>
              <p
                class="google-font"
                style="font-size:95%"
              >Share knowledge with like minded people via blogging.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "App",
  data: () => ({
    whatwedodata: whatwedodata
  }),
  methods: {
    getImgUrl(url) {
      if (url.length > 0) {
        return require("@/assets/img/what-we-do/" + url);
      } else {
        return require("@/assets/img/what-we-do/notFound.png");
      }
    }
  }
};
</script>