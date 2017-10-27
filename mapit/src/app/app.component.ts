import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'My first AGM project';
  lat: number = 19.0473216;
  lng : number = 73.0699046;
  
  setPosition(position){
		
		this.lat = position.coords.latitude;
		this.lng = position.coords.latitude;
		
		
	}
  

ngOnInit(){
	
	if(navigator.geolocation){
		
		navigator.geolocation.getCurrentPosition(this.setPosition);
		
	}else{
		
		
		console.log("geolocation not supported");
		
	}

	  }

	
	 
	  



}







