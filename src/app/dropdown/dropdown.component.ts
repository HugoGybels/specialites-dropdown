import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Specialite } from '../models/specialite.model';
import { Subject } from 'rxjs'
import { debounceTime, map } from 'rxjs/operators';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Output()
  public sendRequest = new EventEmitter<void>();

  
  public subject = new Subject<number>();

  public NOMBRE_CHIPS_AFFICHEES = 3;
  public specialites: Specialite[];
  public specialitesSelectionnees: Specialite[];

  constructor() {
    this.specialites = [
      new Specialite(1, 'CCFC Haut', 'GRIP - CCFC Haut'),
      new Specialite(2, 'CCFC Bas', 'GRIP - CCFC Bas'),
      new Specialite(3, 'CCFC T Haut', 'GRIP - CCFC Très Haut'),
      new Specialite(4, 'D contact sec', 'GRIP - TEMPO double contact sec'),
      new Specialite(5, 'Bois Amiante', 'GRIP - CCPI bois amiante'),
      new Specialite(6, 'G1 > G3', 'Changement technologie G1 > G3'),
      new Specialite(7, 'G3 > G1', 'Changement technologie G3 > G1'),
      new Specialite(8, 'Silencieux', 'C Silencieux'),
    ];

    this.specialitesSelectionnees = this.specialites;
    }

    public ngOnInit() { 
      this.subject.pipe(
        debounceTime(1000),
        map(() => this.sendRequest.emit())
      ).subscribe();
    }

    public getOverflowSpecialites(): string {
        let tmp = this.specialitesSelectionnees.slice(this.NOMBRE_CHIPS_AFFICHEES, this.specialitesSelectionnees.length);
        let tooltipText = '';
        if (tmp !== undefined) {
          tmp.forEach(s => tooltipText += s.libelleCourt);
        }
        return tooltipText;
    }

    public removeSpecialite(specialite : Specialite) {
      this.subject.next();
      this.specialitesSelectionnees.splice(this.specialitesSelectionnees.indexOf(specialite), 1);
    }


} 