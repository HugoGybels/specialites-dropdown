import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  public numberRequestSent = 0;

  public sendRequest() {
    this.numberRequestSent++;
  }
}
