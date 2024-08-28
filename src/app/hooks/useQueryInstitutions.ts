import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from './query.constants';

export interface Institution {
  id: string
  name: string
  description: string
  images: string[]
  pixQRCodeRaw: string
  createdAt: string
}

export default function useQueryInstitutions() {
  const query = useQuery({
    queryKey: [QUERY_KEYS.institutions],
    queryFn: async () => {
      const { data } = await axios.get<Institution[]>(`${process.env.NEXT_PUBLIC_APP_URL}/institutions`)

      return data
    },
  });

  return query;
}
