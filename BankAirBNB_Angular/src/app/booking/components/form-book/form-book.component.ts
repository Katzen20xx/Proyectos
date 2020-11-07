import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service'
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private bookingService: BookingService,
              private route: Router) { }

  ngOnInit(): void {
    this.formReservation();
  }

  private formReservation(): void {
    this.formGroup = this.formBuilder.group({
    startDate: ['', [Validators.required, this.validateStartDate]],
    endDate: ['', Validators.required],
    specialRequest: ''
    }, {
      validators: this.validateDateRange()
    });
  }

  private validateDateRange() {
    return (formGroup: FormGroup) => {
      const ctrlBookingDStart = formGroup.controls['startDate']
      const ctrlBookingDEnd = formGroup.controls['endDate']
      if (new Date(ctrlBookingDStart.value) > new Date(ctrlBookingDEnd.value)) {
        ctrlBookingDEnd.setErrors({ mustGreaterThan: true })
      }
    }
  }

  private validateStartDate (control: AbstractControl) {
    const sDate = new Date(control.value);    
    let date = new Date();
    let error = null;
    
    if (sDate <= date) {
      error = { customError: 'La fecha de entrada debe ser a partir de mañana'}
    }
    return error; 
  }
  
  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;    
  }

  private errorMapping (errors: any): string {
    console.log('errors', errors);
    let errorsMessage = '';
    if (errors.required) {
      errorsMessage += 'Campo Obligatorio. '
    } 
    if (errors.customError) {
      errorsMessage += errors.customError;
    }
    if (errors.mustGreaterThan) {
      errorsMessage += 'La fecha de salida debe ser mayor a la fecha de entrada'
    }   
    return errorsMessage;
  }

  public reservation(): void {
    const data: IBooking = this.formGroup.value;
    data.experience_id = localStorage.getItem('experience');
    console.log('data reservation', data);
    this.bookingService.makeBooking(data).subscribe(response => {
      if (response.status === 1) {       
        console.log('Reserva Exitosa!'); 
        this.route.navigate(['/home']);        
      }     
    });
  }

}
