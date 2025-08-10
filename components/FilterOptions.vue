<script lang="ts" setup>
import { INDUSTRIES, COMPANY_SIZES, QUARTERS } from "~/constants/filterOptions";
const props = defineProps<{
  filters: string[];
  category: string;
  title: string;
}>();

const emit = defineEmits<{
  (e: "update-filters", updateFilter: string): void;
}>();
let options: readonly string[];
switch (props.category) {
  case "industry":
    options = INDUSTRIES;
    break;
  case "companySize":
    options = COMPANY_SIZES;
    break;
  case "quarter":
    options = QUARTERS;
    break;
  default:
    options = [];
}
</script>

<template>
  <div>
    <div class="flex flex-col border p-4 rounded-lg bg-white shadow-md my-2">
      <h4 class="text-md font-semibold text-gray-700 mb-2">{{ title }}</h4>
      <label v-for="option in options" :key="option">
        <input
          type="checkbox"
          :value="option"
          :checked="filters.includes(option)"
          @change="emit('update-filters', option)"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>
