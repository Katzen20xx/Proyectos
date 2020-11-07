import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormBookComponent } from './components/form-book/form-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [BookingComponent, FormBookComponent],
  imports: [
    CommonModule, 
    ReactiveFormsModule, BookingRoutingModule
  ]
})
export class BookingModule { }
