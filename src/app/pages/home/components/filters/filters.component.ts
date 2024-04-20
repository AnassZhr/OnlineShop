import { Component,EventEmitter,OnInit,Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html',
})
export class FiltersComponent {
  @Output() ShowCategory = new EventEmitter<string>();
  
  categories = ['Men','Women'];
  constructor() {}
  ngOnInit(): void{
    
  }

  onShowCategory(category: string): void {
    this.ShowCategory.emit(category);
    
  }

}
