import { Component, HostListener, OnInit, Inject } from '@angular/core';
import { gsap } from 'gsap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  homeHeader = true;

  @HostListener('window:scroll', ['$event']) scrollHandler(event) {
    if (event.path[1]['scrollY'] > (window.innerHeight - 20)) {
      this.homeHeader = false;
    }
    else {
      this.homeHeader = true;
    }
  }


  rotate(){
    var t1=gsap.timeline();
    t1.to(this.document.querySelector(".cardy-main"),{rotationY:180,duration:0.1}); 
  }

  rotate2(){
    gsap.to(this.document.querySelector(".cardy-main"),{rotationY:360,duration:0.1})
  }

}
