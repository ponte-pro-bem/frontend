import { Institution } from "../../app/hooks/useQueryInstitutions";

export interface InstitutionSectionProps {
  onSelectInstitution: (
    institutions: Institution[],
    institutionId: string
  ) => void;
}