import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PersistanceService} from "../../services/persistance.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  @Output() filterEmmit = new EventEmitter();

  optionsGender = [
    { label: 'City', value: 'option2', checked: false },
    { label: 'Street', value: 'option3', checked: false },
    { label: 'Email', value: 'option3', checked: false },
    { label: 'Phone', value: 'option3', checked: false },
  ];

  selectedOption: string | null = null;

  constructor(private persistanceService: PersistanceService) {
  }

  ngOnInit(): void {
    this.initializeValue()
  }

  initializeValue(): void {
    let result = this.persistanceService.get('gender')
    if(result) {
      this.selectedOption = result
    }
  }

  onFilterChange(): void {
    this.persistanceService.set('gender', this.selectedOption)
    this.filterEmmit.emit(`&gender=${this.selectedOption}`)
  }
}
