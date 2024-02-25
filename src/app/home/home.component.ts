// angular modules
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// components
import { HousingLocationComponent } from '../housing-location/housing-location.component';
// interface
import { HousingLocation } from '../housinglocation';
// service
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation">
      </app-housing-location>
    </section>

  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  // The constructor is the first function that runs when this component is created.
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }


}
