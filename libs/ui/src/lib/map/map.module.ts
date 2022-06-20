import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapAComponent } from './components'
import {CoreModule} from "@ionhour/core";

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}

@NgModule({
  declarations: [MapAComponent, SafePipe],
  imports: [CommonModule, CoreModule]
})
export class MapModule {}

export const mapsComponentData = {
  address: 'Egypt',
  zoom: '10'
}

export const mapsFields = [
  {
    wrappers: ['panel'],
    key: 'map',
    title: 'Map options',
    fieldGroup: [
      {
        key: 'address',
        type: 'input',
        templateOptions: {
      label: 'form.Address',
          required: true
        }
      },
      {
        key: 'zoom',
        type: 'slider',
        templateOptions: {
      label: 'form.Zoom',
          min: 7,
          max: 25
        },
      }
    ]
  }
]
