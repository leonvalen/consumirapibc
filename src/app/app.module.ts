import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { SerIndicadoresService } from './services/ser-indicadores.service';
import { HttpModule }    from '@angular/http'; 


@NgModule({
  declarations: [
    AppComponent,
    IndicadoresComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SerIndicadoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
