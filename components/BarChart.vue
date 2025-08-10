<script lang="ts" setup>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const props = defineProps<{
  data: { labels: string[]; values: number[]; title: string; subtitle: string };
}>();

const barColor = "rgba(59, 130, 246, 0.85)";

const chartData = computed(() => {
  return {
    labels: props.data.labels,
    datasets: [
      {
        label: "Mentions",
        data: props.data.values,
        backgroundColor: barColor,
        borderRadius: 8,
        barThickness: 24,
        borderSkipped: false,
      },
    ],
  };
});

const chartOptions = {
  indexAxis: "y",
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      backgroundColor: "#1e293b",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#3b82f6",
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: { color: "#f1f5f9" },
      ticks: { color: "#334155", font: { size: 14 } },
    },
    y: {
      grid: { display: false },
      ticks: { color: "#334155", font: { size: 14 } },
    },
  },
};
</script>

<template>
  <div
    class="w-full max-w-2xl mx-auto bg-white rounded-xl shadow p-6 flex flex-col justify-center"
  >
    <h2 class="text-xl font-semibold text-gray-800 mb-2">
      {{ props.data.title }}
    </h2>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
