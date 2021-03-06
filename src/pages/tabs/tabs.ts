import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

import {Tab1Root, Tab2Root, Tab3Root, Tab4Root, Tab5Root} from '../pages';
import {Item} from "../../models/item";
import {Items} from "../../providers/providers";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  tab5Root: any = Tab5Root;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  tab5Title = " ";

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items) {
  }

  getItems() {
    this.currentItems = this.items.query({
      isFave: "danger"
    });
  }
}
