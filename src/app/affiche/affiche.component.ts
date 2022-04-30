import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-affiche',
  templateUrl: './affiche.component.html',
  styleUrls: ['./affiche.component.css']
})
export class AfficheComponent implements OnInit {

  image: string ="https://images4.alphacoders.com/653/thumb-1920-653613.jpg"
  titre:string="Star Wars"
  constructor(private route:Router) { }

  ngOnInit(): void {      
  }

}