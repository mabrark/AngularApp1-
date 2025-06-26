// conservationTiming.ts
import { ConservationReservation } from "./conservationReservation";

export class ConservationTiming {
  constructor(public user: string, private conservationReservations: ConservationReservation[] = []) {}

  get reservation(): readonly ConservationReservation[] {
    return this.conservationReservations;
  }

  addReservation(timeSlot: string) {
    this.conservationReservations.push(new ConservationReservation(timeSlot));
  }
}
