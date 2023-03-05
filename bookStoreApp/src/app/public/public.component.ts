import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  bookId: number = 12;
  authorId: number = 35;
  newBookId: number = 73;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.firstChild?.params.subscribe(param => {
      console.log('children params ', param);
      this.authorId = param['authorId'];
    });
  }

}
