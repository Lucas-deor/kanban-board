import { KanbanService } from './../services/kanban.service';
import { Component, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Quadro } from '../models/quadro.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novo-quadro',
  templateUrl: './novo-quadro.component.html',
  styleUrls: ['./novo-quadro.component.css']
})
export class NovoQuadroComponent implements OnInit {

  faPlusCircle = faPlusCircle;

  // title!: string;
  quadros!: Quadro[];

  quadroForm: FormGroup = new FormGroup({
    title: new FormControl(),
    content: new FormControl()
  })

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
  }

  createQuadro() {
    this.kanbanService.createQuadroOnServer(this.quadroForm.value.title, this.quadroForm.value.content).subscribe(() => {
      this.kanbanService.getQuadrosFromServer().subscribe(
        (data) => {
          this.quadros = data;
        })
    })
  }

}
