import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import {Component } from  '@angular/core';

import {Hero } from '../hero';



@Component( {
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
     

  power = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  
  
  Model = new Hero(18, 'Dr IQ', this.power[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() {this.submitted = true}
}
