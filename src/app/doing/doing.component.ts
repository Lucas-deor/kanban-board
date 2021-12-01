import { KanbanService } from './../services/kanban.service';
import { Component, Input, OnInit } from '@angular/core';
import { faEdit, faTrash, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { Quadro } from '../models/quadro.model';

@Component({
  selector: 'app-doing',
  templateUrl: './doing.component.html',
  styleUrls: ['./doing.component.css']
})
export class DoingComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faTrash = faTrash;
  faEdit = faEdit;

  @Input() quadro!: Quadro;

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
  }

  quadroChanged = new Subject();

}
