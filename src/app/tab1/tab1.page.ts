import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public listDrugs: Array<string> = ['2C-T-x',
  '2C-x','5-MeO-xxT','Alcohol','Amphetamines',
  'Benzodiazepines','Caffeine','Cocaine','DMT',
  'DOx','LSD','MAOIs','MDMA','MXE','Mescaline',
  'Mushrooms','NBOMes','Nitrous','Opioids','PCP',
  'SSRIs','Tramadol','aMT'];

  constructor() {}



}
