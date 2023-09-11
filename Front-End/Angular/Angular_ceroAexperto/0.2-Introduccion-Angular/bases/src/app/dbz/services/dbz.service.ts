import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid"

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public listCharacter: Character[] = [

  ]

  addCharacter(character: Character): void {
    // debugger;
    const newCharacter: Character = { ...character, id: uuid() }
    this.listCharacter.unshift(newCharacter)
  }

  deleteCharacterById(id: string): void {
    this.listCharacter = this.listCharacter.filter( character => character.id !== id)
  }

}
