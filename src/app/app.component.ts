import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public name$!: Observable<string>;
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
   // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    translate.use(browserLang?.match(/en | fr/) ? browserLang : 'en');

  }
  
  // public ngOnInit(): void {
  //   this.name$ = this.translate.stream('HOME.TITLE');
  // }
}