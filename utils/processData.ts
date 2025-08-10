import type { Question, FilterState } from '~/types'

export function processData(question: Question, filters: FilterState) {
  // Filter data
  const filtered = question.data.filter(entry =>
    (!filters.companySize.length || filters.companySize.includes(entry.companySize)) &&
    (!filters.industry.length || filters.industry.includes(entry.industry)) &&
    (!filters.quarter.length || filters.quarter.includes(entry.quarter))
  )

  // Aggregate by responseValue
  const aggregation: Record<string, number> = {}
  for (const entry of filtered) {
    const key = entry.responseValue
    if (!key) continue
    aggregation[key] = (aggregation[key] || 0) + entry.numResponses
  }

  // Sort by numResponses descending
  const sorted = Object.entries(aggregation)
    .sort((a, b) => b[1] - a[1])

  // Prepare labels and values
  const labels = sorted.map(([label]) => label)
  const values = sorted.map(([, value]) => value)

  // Generate filter summary for subtitle
  const filterParts = []
  if (filters.companySize.length) filterParts.push(filters.companySize.join(', '))
  if (filters.industry.length) filterParts.push(filters.industry.join(', '))
  if (filters.quarter.length) filterParts.push(filters.quarter.join(', '))

  const subtitle = filterParts.length
    ? `Filtered: ${filterParts.join(' | ')}`
    : 'All Data'

  return {
    labels,
    values,
    title: question.question,
    subtitle
  }
}