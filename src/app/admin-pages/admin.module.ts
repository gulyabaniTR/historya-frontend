import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "../app-routing.module";

import { ComponentsModule } from "../components/components.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

import { AdminNavComponent } from "../nav/admin-nav/admin-nav.component";
import { AdminHomeComponent } from "./admin-home/admin-home.component";
import { AdminArticleComponent } from "./article/article/article.component";
import { ArticleAddComponent } from "./article/article-add/article-add.component";
import { ArticleUpdateComponent } from "./article/article-update/article-update.component";
import { ArticleListComponent } from "./article/article-list/article-list.component";
import { MaterialModule } from "../Modules/material/material.module";
import { AdminLayoutComponent } from "../Layouts/admin-layout/admin-layout.component";

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminNavComponent,
    AdminHomeComponent,
    AdminArticleComponent,
    ArticleAddComponent,
    ArticleUpdateComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    ComponentsModule,
    CKEditorModule
  ]
})
export class AdminModule {}
