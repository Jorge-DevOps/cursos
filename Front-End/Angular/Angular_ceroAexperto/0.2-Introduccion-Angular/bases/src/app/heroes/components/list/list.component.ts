import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  public heroName: string[] = ['Spiderman', ' Iroman', 'Hulk',' She Hulk', 'Thor']
  public idDelete?: string

  deleteHeroe():void{
    this.idDelete =  this.heroName.pop()
  }

}
