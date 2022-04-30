import { Routes } from '@angular/router';
import { AfficheComponent } from 'src/app/affiche/affiche.component';
import { AllFilmComponent } from 'src/app/all-film/all-film.component';
import { DetailComponent } from 'src/app/detail/detail.component';
import { MenuComponent } from 'src/app/menu/menu.component';
import { TamponComponent } from 'src/app/tampon/tampon.component';



const ROUTES: Routes = [
  { path: "menu", component: MenuComponent },
  { path: "affiche", component: AfficheComponent },
  { path: "allfilm", component: AllFilmComponent },
  { path: "tampon", component: TamponComponent },
  { path: "detail", component: DetailComponent },
  { path: "**", component: MenuComponent },
]


export { ROUTES }