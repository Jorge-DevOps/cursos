import { Component, Input } from '@angular/core';

@Component({
  selector: 'share-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.sass']
})
export class LazyImageComponent {


  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit() {
    if (!this.url) {
      throw new Error('Attribute url is required');
    }
  }

  onLoad(){
    this.hasLoaded = true;
  }


}
