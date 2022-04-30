import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tampon',
  templateUrl: './tampon.component.html',
  styleUrls: ['./tampon.component.css']
})
export class TamponComponent implements OnInit {


  constructor(private redirect:Router) { }

  ngOnInit(): void {
    this.redirect.navigate(["allfilm"])
  }
}
