import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TitlebarComponent } from "./Components/titlebar/titlebar.component";
import { CalculatorComponent } from "./Components/calculator/calculator.component";
import { GraphicComponent } from "./Components/graphic/graphic.component";

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    CalculatorComponent,
    GraphicComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
