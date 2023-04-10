import { Injectable } from '@angular/core';
import {MockFilterDataInterface} from "../types/mock-filter-data.interface";

@Injectable({
  providedIn: 'root'
})
export class MockFilterDataService {

  private genders: MockFilterDataInterface[] = [
    {value: 'male', name: 'Male', checked: false},
    {value: 'female', name: 'Female', checked: false}
  ]
  private countries: MockFilterDataInterface[] = [
    { value: 'AU', name: 'Australia', checked: false },
    { value: 'BR', name: 'Brazil', checked: false },
    { value: 'CA', name: 'Canada', checked: false },
    { value: 'CH', name: 'Switzerland', checked: false },
    { value: 'DE', name: 'Germany', checked: false },
    { value: 'DK', name: 'Denmark', checked: false },
    { value: 'ES', name: 'Spain', checked: false },
    { value: 'FI', name: 'Finland', checked: false },
    { value: 'FR', name: 'France', checked: false },
    { value: 'GB', name: 'United Kingdom', checked: false },
    { value: 'IE', name: 'Ireland', checked: false },
    { value: 'IN', name: 'India', checked: false },
    { value: 'IR', name: 'Iran', checked: false },
    { value: 'MX', name: 'Mexico', checked: false },
    { value: 'NL', name: 'Netherlands', checked: false },
    { value: 'NO', name: 'Norway', checked: false },
    { value: 'NZ', name: 'New Zealand', checked: false },
    { value: 'RS', name: 'Serbia', checked: false },
    { value: 'TR', name: 'Turkey', checked: false },
    { value: 'UA', name: 'Ukraine', checked: false },
    { value: 'US', name: 'United States of America', checked: false },
  ];
  constructor() { }

  getCountries(): MockFilterDataInterface[] {
    return this.countries
  }

  getGenders(): MockFilterDataInterface[] {
    return this.genders
  }
}
