<script lang="ts" setup>
import { ref, computed, reactive } from "vue";
import { useHubSpotData } from "~/composables/useHubSpotData";
import { processData } from "~/utils/processData";
import type { FilterState } from "~/types";

const filters = reactive<FilterState>({
  companySize: [],
  industry: [],
  quarter: [],
});

const { data: unprocessedData, loading, error } = useHubSpotData();

const questionId = ref("q1");
const unprocessedQuestion = computed(() =>
  unprocessedData.questions.find((q) => q.questionId === questionId.value)
);

const data = computed(() => {
  if (!unprocessedQuestion.value) {
    return null;
  }
  const processedData = processData(unprocessedQuestion.value, filters);
  if (
    !processedData ||
    processedData.values.length === 0 ||
    processedData.labels.length === 0
  ) {
    return null;
  }
  console.log("reprocessing", processedData);

  return processedData;
});

const handleUpdateFilters = (
  updateFilter: string,
  filterCategory: keyof FilterState
) => {
  console.log(`Updating filter for ${filterCategory}: ${updateFilter}`);
  if (filters[filterCategory].includes(updateFilter)) {
    console.log(`Removing filter: ${updateFilter}`);
    filters[filterCategory] = filters[filterCategory].filter(
      (item) => item !== updateFilter
    );
  } else {
    console.log(`Adding filter: ${updateFilter}`);
    filters[filterCategory].push(updateFilter);
  }
};
</script>

<template>
  <div>
    <FilterOptions
      :filters="filters.industry"
      @update-filters="handleUpdateFilters($event, 'industry')"
    />
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error loading data.</div>
    <BarChart v-else-if="data" :data="data" />
    <div v-else>No data available.</div>
  </div>
</template>
