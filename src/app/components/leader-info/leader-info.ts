import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-leader-info',
  imports: [],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfo {

  // INPUTS
  name = input.required<string>();
  age = input.required<number>();
  location = input.required<string>();
  pokemonTeam = input.required<string>();
  gymBadge = input.required<string>();

  // OUTPUT
  descriptionShown = output<string>();

  // Controls whether the description is visible
  showDescription = signal(false);

  // Description / motto / monologue
  description = input.required<string>();

  toggleDescription() {
    this.showDescription.update(value => !value);

    if (this.showDescription()) {
      this.descriptionShown.emit(this.name());
    }
  }

  // Next Question though, How do I store an Image into here???
}