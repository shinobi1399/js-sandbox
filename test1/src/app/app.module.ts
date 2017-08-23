import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {CalculatorModule} from '../calculator/calculator.module';
import {routeRoutes} from './app.router';
import {AutoCompleteModule} from './components/autocomplete/auto-complete.module';
import {AutoCompleteContainerComponent} from './containers/autocomplete-demo/autocomplete.container';
import { AutoCompleteFormGroupComponent } from './containers/autocomplete-demo/form-group/form-group.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AutoCompleteContainerComponent,
    AutoCompleteFormGroupComponent
  ],
  imports: [
    BrowserModule,
    CalculatorModule.forRoot(),
    AutoCompleteModule.forRoot(),
    ReactiveFormsModule,
    routeRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
