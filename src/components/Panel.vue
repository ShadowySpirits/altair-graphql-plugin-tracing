<template>
  <Tracing
    class="tracing"
    :tracing="currentTracing"
    :start-time="currentRequestStartTime"
    :end-time="currentRequestEndTime"
  />
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import Tracing from './Tracing.vue';
import { mock2 as mock } from '../mock';
import { PluginContext } from 'altair-graphql-plugin/src';
import { PluginWindowState } from 'altair-exported-types/dist/app/modules/altair/services/plugin/context/plugin-context.service';

type TODO = any;
export interface TracingFormat {
  version: 1
  startTime: string
  endTime: string
  duration: number
  execution: {
    resolvers: Array<{
      path: Array<string | number>
      parentType: string
      fieldName: string
      returnType: string
      startOffset: number
      duration: number
    }>
  }
}

export default Vue.extend({
  name: 'Panel',
  components: {
    Tracing,
  },
  props: {
    context: {
      type: Object as PropType<PluginContext>,
      required: true,
    }
  },
  data() {
    return {
      currentWindowId: '',
      windows: {} as Record<string, PluginWindowState>,
    };
  },
  computed: {
    currentWindowState(): PluginWindowState | undefined {
      if (!this.currentWindowId) {
        return;
      }

      return this.windows[this.currentWindowId];
    },
    currentQueryResult(): any {
      if (!this.currentWindowState) {
        return;
      }

      return this.currentWindowState.queryResult;
    },
    currentRequestStartTime(): number {
      if (!this.currentWindowState) {
        return 0;
      }

      return this.currentWindowState.requestStartTime || 0;
    },
    currentRequestEndTime(): number {
      if (!this.currentWindowState) {
        return 0;
      }

      return this.currentWindowState.requestEndTime || 0;
    },
    currentTracing(): TODO {
      if (!this.currentQueryResult) {
        return;
      }
      return this.currentQueryResult.extensions?.tracing;
      // return mock.extensions.tracing;
    },
  },
  mounted() {
    this.context.app.getCurrentWindowState().then(state => {
      this.updateWindowState(state.windowId);
      this.currentWindowId = state.windowId;
    });
    this.context.events.on('current-window.change', async({ windowId }) => {
      this.updateWindowState(windowId);
      this.currentWindowId = windowId;
    });
    this.context.events.on('query-result.change', async({ windowId }) => {
      this.updateWindowState(windowId);
    });
    this.context.events.on('query-result-meta.change', async({ windowId }: TODO) => {
      this.updateWindowState(windowId);
    });
  },
  methods: {
    async updateWindowState(windowId: string) {
      const newWindowState = await this.context.app.getWindowState(windowId);
      Vue.set(this.windows, windowId, newWindowState);
      // this.windows[windowId] = newWindowState;
    },
  },
});
</script>

<style scoped>
  .tracing {
    min-height: 100px;
  }
</style>