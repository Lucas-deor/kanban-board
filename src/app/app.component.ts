import { ToDoComponent } from './to-do/to-do.component';
import { Component, OnInit } from '@angular/core';
import { Quadro } from './models/quadro.model';
import { KanbanService } from './services/kanban.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'quadro-de-kanban';

  quadros!: Quadro[];
  QuadroChanged = new Subject();

  constructor(
    private kanbanService: KanbanService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getQuadros();

    this.kanbanService.quadroChanged.subscribe(() => {
      this.getQuadros();
    })
  }

  getQuadros() {
    this.kanbanService.getQuadrosFromServer().subscribe((data) => {
      this.quadros = data;
    })
  }



}
