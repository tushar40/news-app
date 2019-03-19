import { Component, OnInit, Input } from '@angular/core';
import { HeadlinesService } from '../headlines.service'
import { response } from '../response';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.css']
})
export class NewsViewComponent implements OnInit {

  @Input()category:string;
  constructor(private headLinesService: HeadlinesService) { }
  private resp:response;
  ngOnInit() {
    
    this.headLinesService.getNewsHeadline(this.category).subscribe(resp=>this.resp=resp);
    // console.log(this.resp.total_results);
  }

}
