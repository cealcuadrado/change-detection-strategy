import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  aquaticCreatures = ['shark', 'dolphin', 'octopus'];

  constructor() {}

  ngOnInit(): void {}

  addAquaticCreature(newAquaticCreature: any) {
    this.aquaticCreatures.push(newAquaticCreature);
  }
}
