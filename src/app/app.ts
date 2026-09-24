import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Kanto } from './components/kanto/kanto';
import { Johto } from './components/johto/johto';
import { Navbar } from './components/navbar/navbar';

@Component({
  imports: [RouterOutlet,Kanto,Johto,Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Lab1_POKE');
}
