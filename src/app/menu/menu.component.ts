import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ApiService } from '../common/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  result: any = environment.allFilms
  constructor(private service: ApiService, private route: Router) { }

  form = new FormGroup({
    search: new FormControl('')
  })

  ngOnInit(): void {
  }

  film() {
    let appel = this.form.value.search;
    this.service.requestFilm(appel).subscribe({
      next: value => environment.allFilms = value.Search,
      error: error => { console.error(error.toString()) },
      complete: () => {
        this.route.navigate(['tampon'])
        this.form.reset()
        console.log("complete");
      }
    })
    console.log(environment.allFilms);
  }

}