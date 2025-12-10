import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, AboutMeComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Me – Feroz Mohammad',
      description: 'Learn about Feroz Mohammad, a business banking professional and co-founder of Dario Lario. Discover my journey in finance, entrepreneurship, and sustainable artisan leather goods.',
      url: 'https://ferozmohammad.vercel.app/about',
      keywords: 'Feroz Mohammad, Business Banking, Entrepreneur, Dario Lario, Artisan Leather, Portfolio'
    });
  }
}
