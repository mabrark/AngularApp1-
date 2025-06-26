import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // important

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatToolbarModule, MatIconModule, MatBadgeModule,
    MatTableModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule,
    MatSelectModule, MatOptionModule
  ]
})
export class App {
  // Add missing properties and methods
  name: string = '';
  area: string = '';
  timeSlot: string = '';
  showComplete: boolean = false;

  areas = ['Bruce Mill', 'Rockwood', 'Rattray', 'Rattlesnake point'];
  timeSlots = ['9:00am - 12:00pm', '12:00pm - 3:00pm', '3:00pm - 6:00pm'];

  reservations: any[] = [];

  get username(): string {
    return 'Guest';
  }

  get reservationCount(): number {
    return this.reservations.length;
  }

  makeReservation() {
    if (this.name && this.area && this.timeSlot) {
      const duplicate = this.reservations.find(
        (r) => r.area === this.area && r.timeSlot === this.timeSlot
      );

      if (duplicate) {
        alert('Time slot already booked for this area.');
        return;
      }

      this.reservations.push({
        name: this.name,
        area: this.area,
        timeSlot: this.timeSlot,
      });

      this.name = '';
      this.area = '';
      this.timeSlot = '';
    } else {
      alert('Please fill all fields.');
    }
  }
}