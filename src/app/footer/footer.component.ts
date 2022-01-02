import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppInfo } from '../models/app-info.model';
import { ApiInfoService } from '../shared/api-info.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  appInfo: AppInfo = new AppInfo();
  private appInfoSubscription!: Subscription;

  constructor(private apiInfoService: ApiInfoService) { }

  ngOnInit(): void {
    this.appInfoSubscription = this.apiInfoService.getCommercialInfo().subscribe(
      (appInfo: AppInfo) => {
        this.appInfo = appInfo;
      }
    );
  }

  ngOnDestroy(): void {
    this.appInfoSubscription?.unsubscribe();
  }

}
