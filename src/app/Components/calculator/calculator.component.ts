import { Component, OnInit } from "@angular/core";
import { FluidInputs } from "../../fluid-inputs";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"]
})
export class CalculatorComponent implements OnInit {
  velocity = [1, 2, 3, 4, 5, 6, 7, 9, 19, 29];

  model = new FluidInputs(18, 5, 8);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {}

  ngOnInit() {}
}
