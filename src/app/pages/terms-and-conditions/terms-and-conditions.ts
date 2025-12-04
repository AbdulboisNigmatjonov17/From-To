import { Component } from '@angular/core';
import { conditionsData } from '../../../data/conditionData';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.css',
})

export class TermsAndConditions {
  data = conditionsData
}
