import {
  Module,
  VuexModule,
  Mutation,
  MutationAction,
  Action,
} from "vuex-module-decorators";
import { getUserList } from "@/repositories/User";

enum UserAsyncState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  DONE = 'DONE',
}

@Module({ namespaced: true })
export default class UserStore extends VuexModule {
  searchKeyword = "";
  searchUserList: object[] = [];
  isEmptyList = true;
  currAsyncState:UserAsyncState = UserAsyncState.IDLE;

  @Mutation
  fetchKeyword(keyword: string) {
    this.searchKeyword = keyword;
  }

  @Mutation
  fetchCurrAsyncState(state: UserAsyncState) {
    this.currAsyncState = state;
  }

  @Action
  connectSetKeyword(keyword: string): void {
    this.context.commit("fetchKeyword", keyword);
  }

  @Action
  connectGetUserList(): void {
    this.context.dispatch("getUserList");
  }

  @MutationAction 
  async getUserList() {
    this.context.commit('fetchCurrAsyncState',UserAsyncState.LOADING);
    try {
      const searchUserList = (await getUserList(this.searchKeyword, 20, 1)).data.items;
      this.context.commit('fetchCurrAsyncState',UserAsyncState.DONE);
      return { searchUserList };
    }catch(err) {
      this.context.commit('fetchCurrAsyncState',UserAsyncState.ERROR);
    }
  }
}
