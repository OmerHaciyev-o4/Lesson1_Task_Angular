import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-all-three',
  templateUrl: './all-or-three-show.component.html',
  styleUrls: ['./all-or-three-show.component.css']
})
export class AllOrThreeShowComponent implements OnInit {

  State:boolean = true;
  @Output() StateEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  AllOrSimple(state: boolean){
    this.StateEvent.emit(state);
  }

  InptChange(){
    this.AllOrSimple(this.State);
  }
}