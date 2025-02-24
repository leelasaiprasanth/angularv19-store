import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button
      (click)="btnClicked.emit()"
      class="bg-black text-white w-full px-5 py-2 rounded-xl shadow-md hover:opacity-50 cursor-pointer"
    >
      {{ label() }}
    </button>
  `,
  styles: ``,
})
export class ButtonComponent {
  label = input('');

  btnClicked = output();
}
