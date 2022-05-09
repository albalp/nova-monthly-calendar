import { Subscription } from 'rxjs';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Activity } from 'src/app/interfaces/data-interfaces';
import { FocusCardService } from 'src/app/services/focus-card/focus-card.service';

@Component({
  selector: 'app-lista-dia',
  templateUrl: './lista-dia.component.html',
  styleUrls: ['./lista-dia.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListaDiaComponent implements OnInit {
  @Input() arrayDia!: Array<Activity> | undefined;
  subscription!: Subscription;
  state!: boolean;

  constructor(private _focusCardService: FocusCardService) {}

  ngOnInit(): void {
    this.subscription = this._focusCardService
      .onSubscribe()
      .subscribe((state$) => (this.state = state$));
  }
}
