<template>
    <div>
        <v-col>
            <v-text-field
                v-model="keyword"
                label="user name" 
                :append-outer-icon="keyword?'mdi-send':''"
                @keydown.enter="searchUserList"
                @click:append-outer="searchUserList"
            ></v-text-field>
        </v-col>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {namespace} from 'vuex-class'
import { Component } from 'vue-property-decorator'
const userData = namespace('UserStore');
@Component
export default class TxtInput extends Vue{
    get keyword():string {
        return this.$store.state.searchKeyword;
    }
    set keyword(value) {
        this.connectSetKeyword(value);
    }

    searchUserList() {
        this.connectGetUserList();
    }

    @userData.Action
    private connectSetKeyword!: (keyword: string) => void;

    @userData.Action
    private connectGetUserList!: () => void;

}
</script>