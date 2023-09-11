import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gif-card',
  templateUrl: './gif-card.component.html',
  styleUrls: ['./gif-card.component.sass']
})
export class GifCardComponent implements OnInit {
  @Input() public gif!: Gif;

  ngOnInit(): void {
    if (!this.gif) throw new Error('GifCardComponent: gif is required');
  }
}
