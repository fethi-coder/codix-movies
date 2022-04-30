import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AllFilmService } from '../common/all-film.service';

@Component({
  selector: 'app-all-film',
  templateUrl: './all-film.component.html',
  styleUrls: ['./all-film.component.css']
})
export class AllFilmComponent implements OnInit {

  deatailFilm: any = []
  film: any = ""
  visible: boolean = false;

  constructor(private service: AllFilmService,private route:Router) { }

  ngOnInit(): void {
    this.deatailFilm = environment.allFilms
    if(this.deatailFilm == []){
    this.route.navigate(['menu'])
    }
    console.log(this.deatailFilm); 
  }

  details(event: any) {
    console.log(event);
    if (event == "") {
      this.visible = false
    } else {
      this.visible = true
    }
    this.service.allfilmDetails(event).subscribe({
      next: (value: any) => this.film = value,
      error: (error: any) => console.error(error),
      complete: () => console.log("complete")
    })
    console.log(event);
    
  }
  close() {
    this.visible = false
  }

}