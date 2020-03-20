import { Component, OnInit } from '@angular/core';
import { Specialite } from '../models/specialite.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public NOMBRE_CHIPS_AFFICHEES = 3;
  public specialites: Specialite[];
  public specialitesSelectionnees: Specialite[];

  constructor() {
    this.specialites = [
      new Specialite(1, 'CCFC Haut', ''),
      new Specialite(2, 'CCFC Bas', ''),
      new Specialite(3, 'CCFC T Haut', ''),
      new Specialite(4, 'D contact sec', ''),
      new Specialite(5, 'Bois Amiante', ''),
      new Specialite(6, 'G1 > G3', ''),
      new Specialite(7, 'G3 > G1', ''),
      new Specialite(8, 'Silencieux', ''),
    ];

    //this.selectedSpecialties = this.specialties;
    }

    public ngOnInit() { 
    }

    public getOverflowSpecialites(): string {
        let tmp = this.specialitesSelectionnees.slice(this.NOMBRE_CHIPS_AFFICHEES, this.specialitesSelectionnees.length);
        let tooltipText = '';
        if (tmp !== undefined) {
          tmp.forEach(s => tooltipText += s.libelleCourt);
        }
        return tooltipText;
    }


} 