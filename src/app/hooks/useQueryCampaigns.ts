import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from './query.constants';

export interface Campaign {
  id: string
  name: string
  institutionId: string
  description: string
  images: string[]
  pixQRCodeRaw: string
  startDate: string
  endDate: string
  createdAt: string
}

export default function useQueryCampaigns() {
  const query = useQuery({
    queryKey: [QUERY_KEYS.campaigns],
    queryFn: async () => {
      const { data } = await axios.get<Campaign[]>(`${process.env.NEXT_PUBLIC_APP_URL}/campaigns`)
      
      return data
    },
  });

  return query;
}
