import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private resumeLink = 'https://firebasestorage.googleapis.com/v0/b/portfolio-3ff69.appspot.com/o/resume.pdf?alt=media&token=679deb5d-1618-4af5-b6ab-b04256820763';

  constructor() { }

  ngOnInit() {
  }

}
