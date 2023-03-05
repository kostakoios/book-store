import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  bookId: number = 12;
  authorId: number = 35;
  constructor() { }

  ngOnInit(): void {
  }

}
