import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { MenuComponent } from '@lib/components/menu/menu.component';
import { BannerComponent } from '@lib/components/banner/banner.component';
import { AddTaskComponent } from '@lib/components/add-task/add-task.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, MenuComponent, BannerComponent, AddTaskComponent],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private _primengConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        this._primengConfig.ripple = true;
    }
}
