<template>
  <div
    class="tracing-row"
    :style="rowStyles"
  >
    <span class="tracing-row__name-wrapper">
      <span class="tracing-row__name">
        <span
          v-for="(p, idx) in path.slice(-2)"
          :key="p"
          :style="{
            opacity: idx === path.slice(-2).length - 1 ? 1 : 0.6,
          }"
        >{{ `${idx > 0 ? '.' : ''}${p}` }}</span>
      </span>
    </span>
    <span
      class="tracing-row__bar"
      :style="{
        width: `${Math.max(barWidth, 3)}px`
      }"
    ></span>
    <span class="tracing-row__duration">
      {{ printDuration(duration) }}
    </span>
  </div>
</template>

<script lang="ts">
// Retrofitted from:
// https://github.com/graphql/graphql-playground/blob/71fc40bbb8128a0b5202db4addc5b972f093cce2/packages/graphql-playground-react/src/components/Playground/TracingRow.tsx

import Vue, { PropType } from 'vue';
export default Vue.extend({
  name: 'TracingRow',
  props: {
    path: {
      type: Array as PropType<Array<number | string>>,
      required: true,
    },
    startOffset: {
      type: Number, // nanoseconds
      required: true,
    },
    duration: {
      type: Number, // nanoseconds
      required: true,
    }
  },
  data() {
    return {
      factor: 1000 * 1000,
    };
  },
  computed: {
    offsetLeft(): number {
      return this.startOffset / this.factor;
    },
    barWidth(): number {
      return this.duration / this.factor;
    },
    rowStyles(): any {
      return {
        transform: `translateX(${this.offsetLeft}px)`,
      };
    },
  },
  errorCaptured(error) {
    console.log(error);
  },
  methods: {
    printDuration(nanoSeconds: number) {
      const microSeconds = Math.round(nanoSeconds / 1000)
      if (microSeconds > 1000) {
        const ms = Math.round(microSeconds / 1000)
        return `${ms} ms`
      }

      return `${microSeconds} µs`;
    }
  }
});
</script>

<style scoped>
  .tracing-row {
    position: relative;
    font-size: 12px;
    display: table;
    padding-right: 25px;
    color: var(--theme-font-color, white);
  }

  .tracing-row__name-wrapper {
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    display: inline-flex;
    align-items: center;
    text-align: right;
  }

  .tracing-row__name {
    margin-left: 10px;
    white-space: nowrap;
  }

  .tracing-row__bar {
    display: inline-block;
    position: relative;
    margin: 0 10px;
    height: 1.5px;
    bottom: 4px;
    background: var(--primary-color, white);
  }

  .tracing-row__duration {
    font-size: 10px;
    color: var(--theme-off-font-color, gray);
  }
</style>