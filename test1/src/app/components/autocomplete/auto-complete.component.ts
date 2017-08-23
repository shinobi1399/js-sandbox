import {Component, forwardRef, Host, Injector, OnInit, Optional, Provider, Self} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor, FormControl, FormControlDirective, NG_VALUE_ACCESSOR, NgControl,
  NgModel
} from '@angular/forms';

const CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => AutoCompleteComponent)
};

@Component({
  selector: 'app-auto-complete',
  template: `
    <input name='country' [formControl]="control.control"/>
  `,
  providers: [CONTROL_VALUE_ACCESSOR]
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit {
  control: NgControl;
  formControl: AbstractControl = new FormControl('country');
  ngOnInit(): void {

    this.control = this._injector.get(NgControl);
    this.formControl = this.control.control;
    console.log('control', this.formControl );

  }



  constructor(@Self() private _injector: Injector) {
    this.formControl = new FormControl('country');
  }

  onChange = (_: any) => {
  };

  onTouch = () => {
  };

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

}

