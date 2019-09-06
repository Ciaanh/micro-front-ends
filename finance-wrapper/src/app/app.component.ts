import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  messages = "";
  title = "finance-wrapper";
  username = "John Doe";

  helloEvent(who: string) {
    console.log(who);
    this.messages += "> " + who + "\n";
  }
}
