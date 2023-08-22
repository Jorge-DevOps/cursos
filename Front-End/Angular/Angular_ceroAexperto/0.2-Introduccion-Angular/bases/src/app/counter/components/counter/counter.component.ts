import { Component } from "@angular/core";

@Component({
  template: `
    <h3>Counter: {{ counter }}</h3>
  <button (click)="incraseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="incraseBy(-1)" >-1</button>
`,
  selector: "app-counter"
})
export class CounterComponent {
  public counter: number = 10;

  incraseBy(value: number): void {
    this.counter += value
  }
  reset(): void {
    this.counter = 10
  }

}
