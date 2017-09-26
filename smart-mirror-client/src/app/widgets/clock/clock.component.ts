import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit, OnDestroy {

    public date = new Date();

    public subscription: any;

    @Input()
    public clockFormat = 'HH:mm';
 
    @Input()
    public dateFormat = 'EEEE d MMM y';

    @Input()
    public refreshDelay = 1000;

    constructor() { }

    ngOnInit() {
        this.subscription = setInterval(() => {
            this.date = new Date();
        }, this.refreshDelay);
    }

    ngOnDestroy() {
        clearInterval(this.subscription);
    }
}
