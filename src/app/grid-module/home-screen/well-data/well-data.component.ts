import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-well-data',
  templateUrl: './well-data.component.html',
  styleUrls: ['./well-data.component.scss']
})
export class WellDataComponent implements OnInit {
  href: string = '';
  wellData = [
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
    {
      name: 'Well1004A',
      tpsi: '000000',
      cpsi: '000000',
      flow: '000000'
    },
  ]

  tankData = [
    {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    },
    {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    }, {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    }, {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    }, {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    }, {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    }, {
      name: 'Oil Tank 1',
      oil: '100',
      water: '100',
      temp: '100'
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.href = this.router.url;
  }

}
