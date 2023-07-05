import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: any;
  textGroup;

  constructor() {
    this.textGroup = new FormGroup( {
      text: new FormControl('')
    });
  }

  onBeshify() {
    const splitText = this.textGroup.get('text')?.value?.split(" ");
    const result = splitText?.map((word, index) => {
      return (index === (splitText.length-1)) ? word : word + " 🤸‍♀️ ";
    }).join(" ");
    this.title = result;
  }
}
