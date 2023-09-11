import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent {

  @Input()
  public listCharacter: Character[] = []


  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter


  onDeleteId(id: string): void {
    this.onDeleteCharacter.emit(id);
  }

}
