import { LocalDateTime } from 'js-joda';

export interface TramwayScheduleDTO {
  [stop: string] : Array<LocalDateTime>
}
