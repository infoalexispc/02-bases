import { Component, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"],
})
export class CounterComponent {
  counter: number = 10;
  counterSignal = signal(15);

  public increment(value: number): void {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }

  public decrement(value: number): void {
    this.counter -= value;
    //this.counterSignal.update((current) => current - value);
    this.counterSignal.update((current) => current - value);
  }

  public reset(): void {
    this.counter = 0;
    this.counterSignal.set(0);
  }

}
