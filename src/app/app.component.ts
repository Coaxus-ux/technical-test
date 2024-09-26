import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule],
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    constructor(private _primengConfig: PrimeNGConfig) {}

    ngOnInit(): void {
        this._primengConfig.ripple = true;
    }
}
