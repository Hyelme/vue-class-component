<template>
    <div>
        <v-col>
            <v-text-field
                v-model="keyword"
                label="user name" 
                :append-outer-icon="keyword?'mdi-send':''"
                @keydown.enter="searchUserListFunc"
                @click:append-outer="searchUserListFunc"
            ></v-text-field>
        </v-col>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {namespace} from 'vuex-class'
import { Component } from 'vue-property-decorator'
// getModule 'vuex-module-decorater'
const userData = namespace('UserStore');

@Component
export default class TxtInput extends Vue{
    get keyword():string {
        return this.searchKeyword;
    }

    set keyword(value) {
        this.connectSetKeyword(value);
    }

    searchUserListFunc() {
        this.connectGetUserList();
    }

    @userData.State
    searchKeyword!: string;
    searchUserList!: object[]

    @userData.Action
    private connectSetKeyword!: (keyword: string) => void;

    @userData.Action
    private connectGetUserList!: () => void;
}
</script>