import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroService } from './core/services';
import { HeroItemComponent } from './components/hero-item/hero-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroReactiveFormComponent } from './components/hero-reactive-form/hero-reactive-form.component';
import { FormsModule, FormGroup } from '@angular/forms';
import { SuperpowerReactiveFormComponent } from './components/superpower-reactive-form/superpower-reactive-form.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroItemComponent,
    HeroReactiveFormComponent,
    SuperpowerReactiveFormComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
