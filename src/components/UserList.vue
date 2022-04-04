<template>
  <v-container>
    <v-list v-if="currAsyncState === 'DONE'">
      <v-virtual-scroll :items="searchUserList" :item-height="70" height="500">
      <template v-slot:default="{ index, item }">
          <v-list-item :href="item.html_url">
          <v-list-item-avatar>
              <v-img :src="item.avatar_url"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
              <v-list-item-title v-html="item.login"></v-list-item-title>
              <v-list-item-subtitle
              v-html="item.html_url"
              ></v-list-item-subtitle>
          </v-list-item-content>
          </v-list-item>
          <v-divider v-if="index < searchUserList.length - 1"></v-divider>
      </template>
      </v-virtual-scroll>
    </v-list>
    <v-main v-else-if="currAsyncState === 'LOADING'" class="text-center">
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
    </v-main>
    <v-main v-else>
    </v-main>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from "vuex-class";

const userData = namespace("UserStore");

@Component
export default class UserList extends Vue{
    @userData.State
    searchUserList!: Array<object>

    @userData.State
    currAsyncState!: string
}
</script>

<style>
.v-list-item__content {
  margin-left: 0.5rem;
}
</style>
