import { Module } from "vuex";

interface UserStore {
  searchKeyword: string;
  searchUserList: Array<object>;
  isEmptyList: boolean;
}
