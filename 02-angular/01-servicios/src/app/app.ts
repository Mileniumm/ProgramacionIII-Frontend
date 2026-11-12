import { Component } from '@angular/core';
import { Child1 } from './components/child-1/child-1';
import { Child2 } from './components/child-2/child-2';

@Component({
  selector: 'app-root',
  imports: [Child1, Child2],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
