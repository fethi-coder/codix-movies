import { Component, OnInit } from '@angular/core';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  result: any[] = [];
  transfere: any[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.apiSliderTwo().subscribe({
      next: (value: { Search: any[]; }) => { this.result = value.Search },
      error: (error: { toString: () => any; }) => { console.error(error.toString()) },
      complete: () => {
        console.log("complete");
      }
    }) 
  }
  ngOnDestroy(): void {
    this.result =[]
  }

  suivant(){
    this.service.apiSliderTwo().subscribe({
      next: (value: { Search: any[]; }) => { this.result = value.Search },
      error: (error: { toString: () => any; }) => { console.error(error.toString()) },
      complete: () => {
        console.log("complete");
      }
    })    
  }
precedent(){
  this.service.apiSlider().subscribe({
    next: (value: { Search: any[]; }) => { this.result = value.Search },
    error: (error: { toString: () => any; }) => { console.error(error.toString()) },
    complete: () => {
      console.log("complete");
    }
  })
}

details(event: any){
  this.transfere=[event]  
}
}