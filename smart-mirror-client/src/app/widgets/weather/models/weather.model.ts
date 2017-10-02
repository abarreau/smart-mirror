export interface Weather {
  id: string;
  iconClass: string;
  name: string;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  wind: {
    speed: number;
  };
}
