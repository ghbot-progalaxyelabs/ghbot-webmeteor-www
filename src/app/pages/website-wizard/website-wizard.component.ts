import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Website, WebsiteService } from '../editor/website.service';

@Component({
    selector: 'app-website-wizard',
    templateUrl: './website-wizard.component.html',
    styleUrls: ['./website-wizard.component.css'],
    imports: [FormsModule]
})
export class WebsiteWizardComponent implements OnInit {

    website: Website
    websiteTypeSelected = false
    tree: any = {
        branches: []
    }

    constructor(
        private router: Router,
        private websiteService: WebsiteService
    ) {
        this.website = new Website('', 'portfolio', '')
    }

    ngOnInit(): void {
    }

    onWebsiteTypeFormSubmit() {
        console.log('onWebsiteTypeFormSubmit')
        this.websiteTypeSelected = true

        this.websiteService.addWebsite(this.website)
        this.router.navigateByUrl('/editor/' + this.website.id)

        // switch (this.website.type) {
        //     case 'portfolio':
        //         this.router.navigateByUrl('/website-wizard/portfolio-content')
        //         break;
        //     case 'business':
        //         this.router.navigateByUrl('/website-wizard/business-content')
        //         break;
        //     case 'ecommerce':
        //         this.router.navigateByUrl('/website-wizard/ecommerce-content')
        //         break;
        //     case 'blog':
        //         this.router.navigateByUrl('/website-wizard/blog-content')
        //         break;
        //     default:
        //         this.router.navigateByUrl('/website-wizard/portfolio-content')
        //         break;
        // }
    }

}
