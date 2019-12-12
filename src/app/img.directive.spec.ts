import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ImgDirective } from './img.directive';
import { Component, DebugElement } from "@angular/core";

@Component({
  template: `<img id="elementid" appImg src='/assets/images/lorem_ipsum.png?id=elementid' />`
})
class TestImageErrorComponent { }


var ImageLoader = function(url) {
  this.url = url;
  this.image = new Image();

  this.image.onerror = () => {};

  this.load = () => {
    this.image.src = this.url;
  };
}

function getQueryStringValue (source: string, key: string) {  
  return decodeURIComponent(source.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
}  

describe('ImgDirective', () => {
  let component: TestImageErrorComponent;
  let fixture: ComponentFixture<TestImageErrorComponent>;

  let defaultImage: string = "/assets/images/404.png";

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestImageErrorComponent, ImgDirective]
    });
    fixture = TestBed.createComponent(TestImageErrorComponent);
    component = fixture.componentInstance;
  });

  it('should image source be valid', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const img: HTMLElement = debugEl.querySelector('img');

    var imageLoader = new ImageLoader(img['src']);

    imageLoader.image.addEventListener("error", () => {
      img['src'] = defaultImage;
    });

    imageLoader.load();
  });

  it('should scroll to element id', () => {
    const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    const img: HTMLElement = debugEl.querySelector('img');
    let src = img['src'];

    let elementId = getQueryStringValue(src, 'id');

    let element = elementId ? document.querySelector(`#${elementId}`) : null;
    if (element) {
      setTimeout(() =>
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }), 250);
    }
  });

});