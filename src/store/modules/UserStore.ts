import {
  Module,
  VuexModule,
  Mutation,
  MutationAction,
  Action,
} from "vuex-module-decorators";
import { getUserList } from "@/repositories/User";

@Module({ namespaced: true })
export default class UserStore extends VuexModule {
  searchKeyword = "";
  searchUserList: object[] = [];
  isEmptyList = true;

  @Mutation
  fetchKeyword(keyword: string) {
    this.searchKeyword = keyword;
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
    const searchUserList = await (
      await getUserList(this.searchKeyword, 20, 1)
    ).data.items;
    return { searchUserList };
  }
}
