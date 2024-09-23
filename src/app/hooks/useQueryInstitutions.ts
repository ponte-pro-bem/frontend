import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { QUERY_KEYS } from './query.constants';
import { staticInstitutions } from './static/institutions';

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
      // const { data } = await axios.get<Institution[]>(`https://app.pontedobem.org/institutions`)
      const data: Institution[] = staticInstitutions
      return data
    },
  });

  return query;
}
