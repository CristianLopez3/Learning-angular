import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  /**
   * @returns a list of reservations
   */
  getReservations(): Reservation[] {
    console.log("Getting all reservations");
    return this.reservations;
  }


  /** 
   * @param id - the id of the reservation to get
   * @returns  the reservation with the given id
   */
  getReservation(id: string): Reservation | undefined {
    console.log("Getting reservation with id: ", id);
    return this.reservations.find(res => res.id === id);
  }

  /**
   * Adds a reservation to the list
   * @param reservation the reservation to add
   */
  addReservation(reservation: Reservation): void {
    console.log("Adding reservation: ", reservation);
    this.reservations.push(reservation);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));

  }

  /**
   * Deletes a reservation from the list
   * @param id the id of the reservation to delete
   */
  deleteReservation(id: string): void {
    console.log("Deleting reservation with id: ", id);
    let index = this.reservations.findIndex(res => res.id === id);
    this.reservations.splice(index, 1);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  /**
   * Updates a reservation in the list
   * @param updatedReservation the updated reservation
   */
  updateReservation(updatedReservation: Reservation): void {
    console.log("Updating reservation with id: ", updatedReservation.id);
    this.reservations = this.reservations.map(res => {
      if (res.id === updatedReservation.id) {
        return updatedReservation;
      }
      return res;
    });
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

}
