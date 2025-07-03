import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: true,
  templateUrl: './hello.html',
  styleUrls: ['./hello.css']
})
export class HelloComponent {
  name: string = ''; // ← esta es la propiedad a enlazar
}

