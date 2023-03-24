import { Component } from '@angular/core';
import { MYCLASSES } from 'src/assets/data/myclasses';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  change(x: number) {
    console.log("color change");
    document.getElementById("s1")!.style.backgroundColor = 'orange';
  }

  myclasses = MYCLASSES;
}
