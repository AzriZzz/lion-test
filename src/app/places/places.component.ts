import { Component, OnInit } from '@angular/core';
declare var require: any

var json = require('../../assets/stores.json');

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  filteredState = [];
  statesTrue = [];
  filtered_state = []
  selected :any;

  isFocusState;

  constructor() { }

  ngOnInit() {

    for ( var i =0; i < json.length; i++){
      if( json[i].status == true ){
        this.statesTrue.push(json[i]);
      }
    }    
    
    for ( var i =0; i < json.length; i++){
      if( json[i].status == true ){
        this.filteredState.push(json[i].state);
      }
    }

    console.log(this.filteredState);
    this.filtered_state = Array.from(new Set(this.filteredState))
    // console.log("Filtered state: ", this.filtered_state);

  }

  filterByState(filter){
    this.statesTrue = [];
    for ( var i =0; i < json.length; i++){
      if( json[i].status == true ){
        if(json[i].state == filter){
          this.statesTrue.push(json[i]);
        }
      }
    } 
  }
}
