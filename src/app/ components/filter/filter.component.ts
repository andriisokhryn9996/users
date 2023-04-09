import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersistanceService} from "../../services/persistance.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import queryString from 'query-string';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  @Output() filterEmmit = new EventEmitter();
  form: FormGroup;


  genders = [
    {value: 'male', name: 'Male', checked: false},
    {value: 'female', name: 'Female', checked: false}
  ]
  countries = [
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

  constructor( private persistanceService: PersistanceService) {
    this.form = new FormGroup({
      genders: new FormArray(this.genders.map(e => new FormControl(false))),
      countries: new FormArray(this.countries.map(e => new FormControl(false)))
    });
  }

  ngOnInit(): void {
    this.initializeValue()
    this.parseParamForRequest()
  }

  initializeValue(): void {
    let formFormStore = this.persistanceService.get('filter')

    if(formFormStore) {
      this.form.setValue(formFormStore)
      this.form.value.countries.map((el: boolean, index: number) =>  {
        this.countries[index].checked = el
      })

      this.form.value.genders.map((el: boolean, index: number) =>  {
        this.genders[index].checked = el
      })
    }
  }

  onChangeForm(): void {
    this.persistanceService.set('filter', this.form.value)
    this.initializeValue()
    this.parseParamForRequest()
  }

  parseParamForRequest(): void{
    let countriesParams: string[] = []
    let gendersParams: string[] = []

    this.countries.map(el => el.checked && countriesParams.push(el.value))
    this.genders.map(el => el.checked && gendersParams.push(el.value))

    let parsed: {nat: string | undefined, gender: string | undefined} = {nat: undefined, gender: undefined}

    parsed.nat = countriesParams.join(',') || undefined;
    parsed.gender = gendersParams.join(',') || undefined;

    const stringified = queryString.stringify(parsed);
    this.filterEmmit.emit(stringified)
  }

}
