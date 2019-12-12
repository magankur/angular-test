import { Directive, Input, HostListener } from '@angular/core'
@Directive({
  selector: '[appImg]',
  host: {
    '(error)': 'updateUrl()',
    '(load)': 'load()',
    '[src]': 'src'
  }
})

export class ImgDirective {
  // default image
  public defaultImage: string = '/assets/images/404.png';
  @Input() src: string;

  constructor(){}
  
  @HostListener('error')
  updateUrl() {
    this.src = this.defaultImage;
  }
  
  load() {
    let elementId = this.getQueryStringValue(this.src, 'id');
    elementId ? this.onScrollToElement(elementId) : null;
  }

  getQueryStringValue (source: string, key: string) {  
    return decodeURIComponent(source.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
  }  

  /**
   * Scroll to element.
   */
  onScrollToElement(queryParamId: string) {
    let element = document.querySelector(`#${queryParamId}`);
    if (element) {
      setTimeout(() =>
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' }), 250);
    }
  }
  
}