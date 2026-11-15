import { Component,input,output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  isOpen = input.required<boolean>();
  closed  = output<void>();
  label = input('Dialog');

  protected close(): void {
    if (this.isOpen()) this.closed.emit();
  }

  constructor(){

  }
  
  protected onBackdropClick(event: MouseEvent): void {
    // only close when the backdrop itself is clicked, not the panel
    if (event.target === event.currentTarget) this.close();
  }

 /*  emitCloseAction(){
    this.closed .emit();
  } */

}
