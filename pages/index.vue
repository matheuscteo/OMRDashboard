<script lang="ts" setup>
import { ref, computed } from "vue";
import { useHubSpotData } from "~/composables/useHubSpotData";
import { processData } from "~/utils/processData";
import type { FilterState } from "~/types";

const { data } = useHubSpotData();
const filters = ref<FilterState>({
  companySize: [],
  industry: [],
  quarter: [],
});

const chartData = computed(() => processData(data.questions[0], filters.value));
</script>

<template>
  <div>
    <FilterOptions />
    <BarChart :data="chartData" />
  </div>
</template>
