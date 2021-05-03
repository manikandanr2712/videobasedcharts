import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  medicines = [{name:'Tablet'},{name:'Capsule'},{name:'Syrup'},{name:'Suspension'},{name:'Emulsion'}];
  selected = this.medicines[0];
  man: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.man = this.fb.group({
      sath: [''],
      frequency: [''],
      duration: [''],
      medicine_info: ['']
    })
  }

  ngOnInit(): void {
  }
mani(e) {
  this.selected = e;
}
add() {
 const body = {
   sath: this.man.controls['sath'].value
 }
 console.log("bodu",body)
 this.medicines.push({name: body.sath})
 this.man.reset('')
  // this.medicines.push('a')
}
}
