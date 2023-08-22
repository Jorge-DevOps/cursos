import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass']
})
export class HeroComponent {

    public name: string ="Iroman"
    public age: number = 20


    get capitalizedName():string{
      return this.name.toUpperCase()
    }

    getHeroDescription():string {
      return `${this.name} - ${this.age}`
    }

  changeHero(): void {
    this.name = "Spiderman"
  }
  changeAge(): void {
    this.age = 23
   }
}
