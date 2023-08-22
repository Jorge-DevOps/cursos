import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title: string = 'bases';
  public counter: number = 10;

  incraseBy( value:number ): void {
    this.counter += value
  }
  reset(): void {
    this.counter = 10
  }

}
