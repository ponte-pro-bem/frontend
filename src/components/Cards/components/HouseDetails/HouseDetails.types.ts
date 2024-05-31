export interface IHouseDetailsProps {
  house: {
    Bedrooms: number;
    Bathrooms: number;
    Sqft: number;
    Garages: number;
  };
}

export interface IHouseDetailItemProps {
  icon: React.ElementType;
  text: string;
}
