import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    NgFor, NgIf, AsyncPipe, RouterLink, RouterOutlet
  ],
  standalone: true,
})
export class AppComponent {
  title = 'angular 17: New Features Demo';
}
