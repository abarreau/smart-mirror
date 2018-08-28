export interface TramwayScheduleDTO {
  [stop: string] : TramwayStop[];
}

export interface TramwayStop {
  name: string;
  line: string;
  departureTime: string;
}
