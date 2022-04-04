<template>
  <div>
    <TxtInput />
    <UserList />
  </div>
  <!-- <v-container fluid >
        <v-card max-width="450" height="700" class="mx-auto my-12">
            <v-toolbar color="cyan" dark>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>Github API Search Users</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <TxtInput />
            <UserList />
        </v-card>
    </v-container> -->
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import TxtInput from "@/components/TxtInput.vue";
import UserList from "@/components/UserList.vue";

@Component({
  components: {
    TxtInput,
    UserList,
  },
})
export default class SearchView extends Vue {}
</script>
