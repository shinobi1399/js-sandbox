import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from '@angular/forms';

@Component({
  selector: 'app-auto-complete-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css'],
})
export class AutoCompleteFormGroupComponent implements OnInit {
  country: string = null;
  _formGroup: FormGroup;
  _value: any;
  ngModelValue: string = 'initial value';
  constructor(private _formBuilder: FormBuilder) {
  }

  get debug() {
    return JSON.stringify(this._formGroup.getRawValue());
  }
  ngOnInit() {
    this._formGroup = this._formBuilder.group({
      country: ['', [Validators.required]],
      codename: []
    });

    console.log(this._formGroup);
    this._formGroup.valueChanges.subscribe(value => this.country = value);
  }

  getCountries(): Country[] {
    return [
      {code: 'NZ', name: 'New Zealand'},
      {code: 'AU', name: 'Australia'}
    ];
  }

  getCodeNames(): string[] {
    return ['terminator', 'angry bird'];
  }
}

export interface Country {
  code: string,
  name: string
}
