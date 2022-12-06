import { Component, OnInit } from '@angular/core';
import { DogsService } from '../dogs.service';
import { imgDog } from '../imgDog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private getservice: DogsService ) { }

  dg?: imgDog

  ngOnInit(): void {
    this.View();
  }

  View(){
    this.getservice.msDogs().subscribe(dog => this.dg = dog)
  }
}
