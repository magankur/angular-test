import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ImgDirective } from './img.directive';
import { Component, DebugElement } from "@angular/core";

@Component({
  template: `<img appImg src='/assets/images/lorem_ipsum.png' />`
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

});