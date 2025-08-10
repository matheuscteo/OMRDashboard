<script lang="ts" setup>
import type { FilterState } from "~/types";

const industryOptions = [
  "E-Commerce",
  "Media & Marketing",
  "Finance & Banking",
  "SaaS & Technology",
  "Education",
  "Consulting",
];
const props = defineProps<{ filters: string[] }>();

const emit = defineEmits<{
  (e: "update-filters", updateFilter: string): void;
}>();
</script>

<template>
  <div>
    <h3>Filter Options</h3>
    <label v-for="option in industryOptions" :key="option">
      <input
        type="checkbox"
        :value="option"
        :checked="filters.includes(option)"
        @change="emit('update-filters', option)"
      />
      {{ option }}
    </label>
  </div>
</template>
