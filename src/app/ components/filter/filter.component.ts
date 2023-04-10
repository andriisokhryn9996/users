import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersistanceService} from "../../services/persistance.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import queryString from 'query-string';
import {MockFilterDataService} from "../../services/mock-filter-data.service";
import {MockFilterDataInterface} from "../../types/mock-filter-data.interface";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  @Output() filterEmmit = new EventEmitter();
  form!: FormGroup;


  genders!: MockFilterDataInterface[]
  countries!: MockFilterDataInterface[]

  constructor( private persistanceService: PersistanceService, private mockService: MockFilterDataService) {}

  ngOnInit(): void {
    this.countries = this.mockService.getCountries()
    this.genders = this.mockService.getGenders()

    this.initializeForm()
    this.initializeValue()
    this.parseParamForRequest()
  }

  initializeForm(){
    this.form = new FormGroup({
      genders: new FormArray(this.genders.map(e => new FormControl(false))),
      countries: new FormArray(this.countries.map(e => new FormControl(false)))
    });
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
