import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeModule, ReservationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotel-app';
}
