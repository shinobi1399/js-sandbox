import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  templateUrl: './calculator.container.html',
  styleUrls: ['./calculator.container.scss'],
  selector: 'app-calculator'
})
export class CalculatorComponent implements OnChanges {
  @Input()
  public counter: number;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes', changes);
  }

}
