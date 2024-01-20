import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() instock: number = 0;
  @Input() outofstock: number = 0;

  @Output()
  selectedfilterchanged: EventEmitter<string> = new EventEmitter<string>();

  selectedfilter:string = 'all';

  onSelectedfilterchanged(){
    this.selectedfilterchanged.emit(this.selectedfilter);
  }
}
