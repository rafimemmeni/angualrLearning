import { Component, Input, OnChanges }       from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  heroForm: FormGroup;
  @Input() hero: Hero;
  constructor(private fb: FormBuilder)
   {
    this.createForm();
    }
  createForm() {
    this.heroForm = this.fb.group({
      name: ''
    });
  }
  ngOnChanges() {
    this.rebuildForm();
  }
  rebuildForm() {
    this.heroForm.reset({
      name: this.hero.name
    });
  }
  ngOnInit() {
  }

}
