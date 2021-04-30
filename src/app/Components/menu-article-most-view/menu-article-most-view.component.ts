import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/Models/article.model";
import { ArticleService } from "src/app/services/article.service";


@Component({
  selector: "app-menu-article-most-view",
  templateUrl: "./menu-article-most-view.component.html",
  styleUrls: ["./menu-article-most-view.component.css"]
})
export class MenuArticleMostViewComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticlesByMostView().subscribe(data => {
      this.articles = data;
    });
  }
}
