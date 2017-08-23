import {ModuleWithProviders, NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CalculatorComponent} from './calculator.component';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule ],
  declarations: [CalculatorComponent],
  exports: [CalculatorComponent]
})
export class CalculatorModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CalculatorModule,
      providers: []
    }
  }
}
