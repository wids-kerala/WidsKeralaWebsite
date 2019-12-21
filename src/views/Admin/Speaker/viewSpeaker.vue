<template>
  <v-content :class="$vuetify.theme.dark == true?'blank':'grey lighten-5'">
    <v-container fluid class="text-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="11">
          <v-toolbar class="elevation-1">
            <router-link
              to="/admin/dashboard/speaker/"
              :color="$vuetify.theme.dark == true?'white':'black'"
              class="ma-0 google-font mb-0"
              style="border-radius:5px;text-transform: capitalize;text-decoration:none;"
            >
              <v-icon left>mdi-arrow-left-thick</v-icon>Speakers
            </router-link>&nbsp;
            <div class="flex-grow-1"></div>
            <!-- <editTeam :teamData="teamData" v-on:editedSuccess="editedSuccessFun" class="mr-2" v-if="showTeamData"/> -->
            &nbsp;
            <!-- <removeTeam class="mr-1" v-if="showTeamData" :teamData="{id:$route.params.id,name:teamData.name}" /> -->

            <!-- <v-tooltip bottom v-if="showTeamData">
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" target="_blank" v-on:click="showPublicURL($route.params.id)">
                            <v-icon color="indigo">mdi-eye</v-icon>
                            </v-btn>
                        </template>
                        <span>Show Public URL</span>
            </v-tooltip>-->
          </v-toolbar>
          <!-- {{$route.params.id }} -->
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class v-if="isLoading">
        <v-col cols="12" md="11" class>
          <v-progress-circular :width="4" :size="70" color="indigo" indeterminate></v-progress-circular>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class v-else-if="!isLoading && isSpeakerFound">
        <v-col cols="12" md="11" class>
          <v-container fluid>
            <v-row>
              <v-col
                col="12"
                md="3"
                class="pa-1 elevation-1 py-5"
                :class="$vuetify.theme.dark == true?'grey darken-4':'white'"
              >
                <v-avatar size="120">
                  <img :src="speaker.image" :alt="speaker.name" />
                </v-avatar>

                <p
                  class="mt-3 mb-0 google-font mb-0 text--black"
                  style="font-size:120%"
                >{{speaker.name}}</p>
                <p
                  class="mt-1 mb-0 google-font mt-0 greyText"
                  style="font-size:100%"
                >{{speaker.designation}}</p>

                <v-chip class="mt-2" :href="speaker.company.url" target="_blank" small>{{speaker.company.name}}</v-chip>

                <br />
                <br />
                <v-chip class="ma-1" v-if="speaker.visible" dark label color="green" small>Visible</v-chip>
                <v-chip class="ma-1" v-else label dark color="red" small>Not Visible</v-chip>

                <br />
                <br />

                <br />
              </v-col>

              <v-col
                col="12"
                md="9"
                class="elevation-1 py-5 text-left pa-5"
                :class="$vuetify.theme.dark == true?'grey darken-4':'white'"
              >
                <p class="mb-0">
                  <b>Bio</b>
                </p>
                <p class="mt-1 mb-0 google-font greyText mt-0">{{speaker.bio}}</p>

                <p class="mb-0 mt-3">
                  <b>Email</b>
                </p>
                <p class="mt-0 mb-0 google-font greyText mt-0">{{speaker.email}}</p>

                <p class="mb-0 mt-3">
                  <b>Mobile</b>
                </p>
                <p class="mt-0 mb-0 google-font greyText mt-0">{{speaker.mbnumber}}</p>
                <p class="mb-0 mt-3">
                  <b>Location</b>
                </p>
                <p class="mt-0 mb-0 google-font greyText mt-0">{{speaker.city}}, {{ speaker.country }}</p>

                <p class="mb-0 mt-3">
                  <b>User ID</b>
                </p>
                <p class="mt-0 mb-0 google-font greyText mt-0">{{speaker.id}}</p>

                <p class="mb-0 mt-3">
                  <b>Social Links</b>
                </p>
                <p class="mt-1 mb-0 mt-0">
                  <v-chip-group column>
                    <v-chip
                      class="google-font"
                      v-for="(socialLinks,i) in speaker.socialLinks"
                      :key="i"
                      :href="socialLinks"
                      target="_blank"
                    >{{ i.charAt(0).toUpperCase() + i.slice(1) }}</v-chip>
                  </v-chip-group>
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class v-else>
        <v-col cols="12" md="11">
          <v-container fluid>
            <v-row class="elevation-1 pa-3 white">
              <v-col>
                <h1>User Not Found</h1>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import firebase from "@/firebase";

export default {
  name: "viewSpeakers",
  data: () => ({
    speaker: {},
    isLoading: false,
    isSpeakerFound: true
  }),
  created() {
    this.isLoading = true;
    firebase.firestore
      .collection("speakers")
      .doc(this.$route.params.id)
      .get()
      .then(res => {
        // console.log(res);
        if (res.exists) {
          // console.log(res.data())
          this.speaker = res.data();
          this.isLoading = false;
        } else {
          // console.log("No User Found")
          this.isSpeakerFound = false;
          this.isLoading = false;
        }
      });
  }
};
</script>

<style>
.greyText {
  color: #616161;
}
</style>