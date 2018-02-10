import { Directive, ElementRef, AfterViewInit, Renderer2, Attribute} from '@angular/core';
import { element } from 'protractor';
import { debug } from 'util';

@Directive({
  selector: '[ewdContadorCaracteres]'
})
export class ContadorCaracteresDirective implements AfterViewInit {

  private _counterHtmlElement: any = null;
  private _maxLenghtSize: number = null;
  private _counterReverse = false;

  constructor( private _element: ElementRef
    , private _renderer: Renderer2
    , @Attribute('ewdContadorCaracteres') _attContadorCaracteres: string
    , @Attribute('ewdMaxLength') _attMaxLenght: string) {
      this._counterReverse = _attContadorCaracteres != null && _attContadorCaracteres.toLowerCase() === 'reverse';
      this._maxLenghtSize = _attMaxLenght != null && parseInt(_attMaxLenght, 10) > 0 ? parseInt(_attMaxLenght, 10) : null;

      this.validateOptions();
  }

  validateOptions(): void {
    if (this._counterReverse && this._maxLenghtSize == null || 0 ) {
      throw new Error('Diretiva [ewdContadorCaracteres], a opcão "reverse" funciona apenas em conjunto com a diretiva [ewdMaxLength] ');
    }
  }

  ngAfterViewInit(): void {
    //throw new Error('Method not implemented.');
  }

  onInput(event: any): void {
    throw new Error('Method not implemented.');
  }

  onPaste(event: any): void {
    throw new Error('Method not implemented.');
  }

  onKeyPress(event: any): void {
    throw new Error('Method not implemented.');
  }

}
