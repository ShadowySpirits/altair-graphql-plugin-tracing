<template>
  <div class="tracing-wrapper">
    <div
      v-if="tracingSupported"
      class="tracing-rows"
    >
      <TracingRow
        :path="['Request']"
        :start-offset="0"
        :duration="requestDurationNanoseconds"
      />
      <TracingRow
        v-for="res in resolvers"
        :key="res.path.join('.')"
        :path="res.path"
        :start-offset="res.startOffset + requestDurationNanoseconds"
        :duration="res.duration"
      />
      <TracingRow
        :path="['Response']"
        :start-offset="tracing.duration + requestDurationNanoseconds"
        :duration="responseDurationNanoseconds"
      />
    </div>
    <div
      v-else
      class="not-supported"
    >
      This GraphQL server doesn’t support tracing. See the following page
      for instructions:<br />
      https://github.com/apollographql/apollo-tracing
      <br /><br>
      Or check that you are using at least Altair v4.0.6
    </div>
  </div>
</template>

<script lang="ts">
// Retrofitted from:
// https://github.com/graphql/graphql-playground/blob/60f90a910f6df590c6c87cf3f8922a4f61ef454e/packages/graphql-playground-react/src/components/Playground/ResponseTracing.tsx

import Vue from 'vue';
import TracingRow from './TracingRow.vue';

export default Vue.extend({
  name: 'Tracing',
  components: {
    TracingRow,
  },
  props: {
    tracing: {
      type: Object,
    },
    startTime: {
      type: Number, // in ms
      default: 0,
    },
    endTime: {
      type: Number, // in ms
      default: 0,
    },
  },
  computed: {
    tracingSupported(): boolean {
      return !!this.tracing && !!this.startTime && !!this.endTime;
    },
    requestDuration(): number {
      return this.startTime ? Math.abs(new Date(this.tracing.startTime).getTime() - this.startTime) : 0;
    },
    responseDuration(): number {
      return this.endTime ? Math.abs(new Date(this.tracing.endTime).getTime() - this.endTime) : 0;
    },
    requestDurationNanoseconds(): number {
      return this.requestDuration * 1000 * 1000;
    },
    responseDurationNanoseconds(): number {
      return this.requestDurationNanoseconds + this.tracing.duration;
    },
    resolvers(): any[] {
      return this.tracing.execution.resolvers;
    },
  },
});
</script>

<style scoped>
  .tracing-wrapper {
    padding-top: 6px;
    padding-left: 25px;
    padding-right: 25px;
    color: var(--theme-font-color, white);
    overflow: auto;
    position: relative;
    height: 100%;
  }

  .tracing-rows {
    /* padding-left: 100px; */
    padding: 10px 0 10px 120px;
    /* padding-bottom: 100px; */
    /* padding-top: 16px; */
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
    /* width: calc(100% + 120px);
    height: calc(100% + 116px); */
    width: 100%;
    height: 100%;
  }

  .not-supported {
    font-size: 14px;
    color: var(--cerise-color, rgba(241, 143, 1, 1));
  }
</style>