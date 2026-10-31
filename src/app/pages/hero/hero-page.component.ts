import { UpperCasePipe } from "@angular/common";
import { Component, computed, Signal, signal } from "@angular/core";

@Component({
  selector: "app-hero-page",
  templateUrl: "./hero-page.component.html",
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal("Ironman");
  age = signal(45);

  heroDescription = computed(()=> {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  });

  public changeHero():void {
    this.name.set("Spiderman");
    this.age.set(22);
  }

  public resetForm():void {
    this.name.set("Ironman");
    this.age.set(45);
  }

  public changeAge():void {
    this.age.set(60);
  }
}
