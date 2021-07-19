import { exampleTableBody } from '@/views/DataTable/ClientSide/fixtures';
import { Module, VuexModule, MutationAction } from 'vuex-module-decorators';

export const STORE_KEY = '$_chi-vue';

@Module({
  namespaced: true,
  name: STORE_KEY,
})
export default class ChiVue extends VuexModule {
  filterConfig: object = {};
  filterConfigLive: object = {};
  tableBody: any = {};

  @MutationAction
  async updateFilterConfig(payload: any) {
    try {
      return {
        filterConfig: payload,
      };
    } catch (error) {
      return {
        filterConfig: {},
      };
    }
  }

  @MutationAction({ mutate: ['tableBody'] })
  async loadMockApi() {
    try {
      const apiClientsData = exampleTableBody;
      return {
        tableBody: apiClientsData,
      };
    } catch (error) {
      return {
        tableBody: {},
      };
    }
  }

  @MutationAction
  async updateFilterConfigLive(payload: any) {
    try {
      return {
        filterConfigLive: payload,
      };
    } catch (error) {
      return {
        filterConfigLive: {},
      };
    }
  }
}
