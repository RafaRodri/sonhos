import {Component, OnInit} from '@angular/core';
import {ModalComponent} from '../modal/modal.component';
import {Category} from '../../model/category.model';
import {CategoryService} from '../../providers/category/category.provider';

@Component({
  selector: 'app-sonhos',
  templateUrl: 'sonhos.page.html',
  styleUrls: ['sonhos.page.scss']
})
export class SonhosPage implements OnInit{
    categories: Category[]

    constructor(private categoriesService: CategoryService){}

    ngOnInit(){
        this.categoriesService.getCategories().subscribe(categories => this.categories = categories)
    }
}
