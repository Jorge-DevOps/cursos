import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPage {
  constructor(private dbzSerivce: DbzService) { }
  get characters(): Character[] {
    return this.dbzSerivce.listCharacter
  }

  onDeleteCharacter(id: string):void{
    this.dbzSerivce.deleteCharacterById(id)
  }
  onNewCharacter(character: Character):void{
    this.dbzSerivce.addCharacter(character)
  }
}
