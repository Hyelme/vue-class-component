import {
    Module,
    VuexModule,
    Mutation,
    Action,
} from "vuex-module-decorators";

@Module({ namespaced: true })
export default class CommonState extends VuexModule {

    visible = false;
    

    @Mutation
    fetchShowLoadingBar():void {
        this.visible = true;
    }

    @Mutation
    fetchHideLoadingBar():void {
        this.visible = false;
    }

    @Action
    showLoadingBar(): void {
        this.context.commit("fetchShowLoadingBar");
    }
    
    @Action
    hideLoadingBar(): void {
        this.context.commit("fetchShowLoadingBar");
    }
}
  