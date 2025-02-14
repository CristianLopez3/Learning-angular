import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';


/**
 * @selector app-appointment-list is root-component of the application
 * @templateUrl is the html file of the component
 * @styleUrls is the css file of the component (aplies to the component only)
 * @standalone is a boolean property which is used to define whether the component is standalone or not.
 */
@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit {

  newAppointmentTitle: string = "";
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = []


  ngOnInit(): void {
    console.log("loaded..");
    let savedAppointments = localStorage.getItem('appointments');
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : [];
  }


  /**
   * @description addAppointment is a method to add a new appointment to the list, it creates a new appointment and push it to the list
   */
  addAppointment() {
    console.log("Adding appointment");
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      };

      this.appointments.push(newAppointment);
      this.newAppointmentTitle = "";
      this.newAppointmentDate = new Date();

      localStorage.setItem('appointments', JSON.stringify(this.appointments));
    }
  }

  /**
   * @description deleteAppointment is a method to delete an appointment from the list, recibes an appointment and filter the list to eliminate it
   * @param appointment appointment to be eliminated
   * @returns void
   */
  deleteAppointment(appointment: Appointment) {
    console.log("Deleting appointment");
    this.appointments = this.appointments.filter(app => app.id !== appointment.id);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }

}
