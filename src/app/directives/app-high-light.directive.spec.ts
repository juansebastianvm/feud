import { ElementRef } from '@angular/core';
import { AppHighLightDirective } from './app-high-light.directive';

describe('AppHighLightDirective', () => {
  it('should create an instance', () => {

    let elRefMock = {
      nativeElement: document.createElement('p')
    };

    const directive = new AppHighLightDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
