import hubSpotData from '~/data.json'
import type { HubSpotData } from '~/types';

export function useHubSpotData():{
  data: HubSpotData;
  loading: boolean;
  error: boolean;
} {
  return {
    data: hubSpotData as HubSpotData,
    loading: false,
    error: false,
  }
}
