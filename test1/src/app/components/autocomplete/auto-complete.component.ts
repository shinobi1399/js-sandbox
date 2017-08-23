import {Component, forwardRef, Host, Injector, Input, OnInit, Optional, Provider, Self} from '@angular/core';
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
  styles: ['.ng-invalid {border-color: red}'],

  providers: [CONTROL_VALUE_ACCESSOR]
})
export class AutoCompleteComponent implements ControlValueAccessor, OnInit {
  @Input() validationMessages: { [key: string]: string };

  control: NgControl;

  ngOnInit(): void {
    this.control = this._injector.get(NgControl);
  }


  constructor(@Self() private _injector: Injector) {
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

