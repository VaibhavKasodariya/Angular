import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  imports: [CommonModule,FormsModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  news: any[] = [];//to store all news in class file
  //we don't know data type of new

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getnews().subscribe(
      (data: any) => {
        this.news = data.articles;
      },
      (error) => {
        console.error('Error fetching news:', error);
      }
    );
  }
}
