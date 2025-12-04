import { Component } from '@angular/core';
import { AdvertisementData } from '../../../data/advertisementData';
import { IAdvertisementData } from '../../models/Models';

@Component({
  selector: 'app-advertisement',
  imports: [],
  templateUrl: './advertisement.html',
  styleUrl: './advertisement.css',
})
export class Advertisement {
  data: IAdvertisementData = AdvertisementData
}
