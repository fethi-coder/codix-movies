import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AfficheComponent } from './affiche/affiche.component';
import { MenuComponent } from './menu/menu.component';
import { SliderComponent } from './slider/slider.component';
import { DetailComponent } from './detail/detail.component';
import { AllFilmComponent } from './all-film/all-film.component';
import { TamponComponent } from './tampon/tampon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { ApiService } from './common/api.service';
import { ROUTES } from './common/app-routing/app-routing';
import { AllFilmService } from './common/all-film.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    AllFilmComponent,
    TamponComponent,
    AfficheComponent,
    MenuComponent,
    SliderComponent
  ],exports:[RouterModule],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    ApiService,
    AllFilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
