import { Component, OnInit } from '@angular/core';
import { Specialty } from '../models/specialty.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public NOMBRE_CHIPS_AFFICHEES = 3;
  public specialties: Specialty[];
  public selectedSpecialties: Specialty[];

  constructor() {
    this.specialties = [
      new Specialty(1, 'CCFC Haut'),
      new Specialty(2, 'CCFC Bas'),
      new Specialty(3, 'CCFC T Haut'),
      new Specialty(4, 'D contact sec'),
      new Specialty(5, 'Bois Amiante'),
      new Specialty(6, 'G1 > G3'),
      new Specialty(7, 'G3 > G1'),
      new Specialty(8, 'Silencieux'),
    ];

    //this.selectedSpecialties = this.specialties;
    }

    public ngOnInit() { 
    }

    public getOverflowSpecialites(): string {
        let tmp = this.selectedSpecialties.slice(this.NOMBRE_CHIPS_AFFICHEES, this.selectedSpecialties.length);
        let tooltipText = '';
        if (tmp !== undefined) {
          tmp.forEach(s => tooltipText += s.libelle);
        }
        return tooltipText;
    }


} 