import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Component
import { AppComponent } from './app.component';
import { SurvivorOverviewComponent } from './overview/overview.component';
// Services
import { SurvivorService } from './survivor.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    SurvivorOverviewComponent
  ],
  providers: [
    SurvivorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
