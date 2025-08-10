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
  <div class="flex w-full max-w-6xl mx-auto justify-around items-start gap-8">
    <aside class="min-w-[200px] flex flex-col">
      <h3 class="text-lg font-semibold text-indigo-700 p-2">Filter Options</h3>
      <FilterOptions
        :filters="filters.industry"
        :category="'industry'"
        :title="'Industry'"
        @update-filters="handleUpdateFilters($event, 'industry')"
      />

      <FilterOptions
        :filters="filters.companySize"
        :category="'companySize'"
        :title="'Company Size'"
        @update-filters="handleUpdateFilters($event, 'companySize')"
      />

      <FilterOptions
        :filters="filters.quarter"
        :category="'quarter'"
        :title="'Quarter'"
        @update-filters="handleUpdateFilters($event, 'quarter')"
      />
    </aside>

    <section class="max-w-full min-w-[600px]">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error loading data.</div>
      <BarChart v-else-if="data" :data="data" />
      <div v-else>No data available.</div>
    </section>
  </div>
</template>
