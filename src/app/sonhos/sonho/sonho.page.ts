import {Component, Input, OnInit} from '@angular/core';
import {ModalController, PopoverController} from '@ionic/angular';
import {Category} from '../../../model/category.model';
import {Dream} from '../../../model/dream.model';
import {DreamService} from '../../../providers/dream/dream.provider';
import {ModalComponent} from '../../modal/modal.component';
import {PopoverComponent} from '../../popover/popover.component';

@Component({
  selector: 'app-sonho',
  templateUrl: './sonho.page.html',
  styleUrls: ['./sonho.page.scss'],
})
export class SonhoPage implements OnInit {

  dreams: Dream[]

  @Input() category: string

  constructor(private modalCtrl: ModalController,
              private popoverCtrl: PopoverController,
              private dreamsService: DreamService) { }


  /* Modal */
  async showModal(id: number){
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
          id: id
      }
    });
    return await modal.present();
  }


  // /* Popover */
  // async showPopover(id: number){
  //   const popover = await this.popoverCtrl.create({
  //     component: PopoverComponent,
  //     //event: id,
  //     translucent: true
  //     // componentProps: {
  //     //     data: id
  //     // }
  //   });
  //   return await popover.present();
  // }

  ngOnInit() {
    this.dreamsService.getDreams(this.category).subscribe(dreams => this.dreams = dreams)
  }

}
