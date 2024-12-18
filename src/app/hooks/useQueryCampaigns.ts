import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "./query.constants";

export interface Campaign {
  id: string;
  name: string;
  institutionId: string;
  description: string;
  images: { key: string, url: string, id: string }[];
  pixQRCodeRaw: string;
  // startDate: string;
  // endDate: string;
  createdAt: string;
  tags: {
    id: string;
    name: string;
    icon?: string;
    iconLibrary?: string;
  }[];
}

export default function useQueryCampaigns() {
  const query = useQuery({
    queryKey: [QUERY_KEYS.campaigns],
    queryFn: async () => {
      const { data } = await axios.get<Campaign[]>(
        `https://app.pontedobem.org/campaigns`
      );


      return data;
    },
  });

  return query;
}
