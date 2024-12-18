import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { QUERY_KEYS } from "./query.constants";
import { staticInstitutions } from "./static/institutions";

export interface Institution {
  id: string;
  name: string;
  description: string;
  images: { key: string, url: string, id: string }[];
  pixQRCodeRaw: string;
  createdAt: string;
  tags: {
    id: string;
    name: string;
    icon?: string;
    iconLibrary?: string;
  }[];
}
export default function useQueryInstitutions() {
  const query = useQuery({
    queryKey: [QUERY_KEYS.institutions],
    queryFn: async () => {
      const { data } = await axios.get<Institution[]>(
        `https://app.pontedobem.org/institutions`
      );

      return data;
    },
  });

  return query;
}
