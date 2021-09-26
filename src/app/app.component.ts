import { Component, OnInit } from '@angular/core'
import * as _ from 'lodash'
import { ageAttributes } from 'src/assets/attributes/age'
import { genderAttributes } from 'src/assets/attributes/gender'

import { hatAttributes } from 'src/assets/attributes/hats'
import { raceAttributes } from 'src/assets/attributes/races'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  categories: any = [
    {
      name: 'Chapeau',
      attributes: hatAttributes,
    },
    {
      name: 'Genre',
      attributes: genderAttributes,
    },
    {
      name: 'Âge',
      attributes: ageAttributes,
    },
    {
      name: 'Race',
      attributes: raceAttributes,
    },
  ]
  constructor() {}
  ngOnInit() {}

  rollAllAttributes() {
    this.categories.forEach((cat: any) => {
      cat.selected = _.sample(cat.attributes)
    })
  }

  rollAttributes(category) {
    category.selected = _.sample(category.attributes)
  }
}
