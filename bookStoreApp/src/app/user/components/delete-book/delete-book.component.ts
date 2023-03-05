import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.scss']
})
export class DeleteBookComponent implements OnInit {
  public userId: number = 0;
  constructor(private rout: ActivatedRoute) { }

  ngOnInit(): void {
    this.rout.parent?.params.subscribe(param => {
      this.userId = param['userId'];
    });
  }

}
