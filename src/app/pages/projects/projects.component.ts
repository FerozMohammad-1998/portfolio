import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent as ProjectsContentComponent } from '../../components/projects/projects.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, ProjectsContentComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Projects – Feroz Mohammad',
      description: 'Showcase of Feroz Mohammad’s projects, including the launch of Dario Lario, wine consulting events, and business development initiatives with SMEs. Explore artisan leather craftsmanship and entrepreneurial ventures.',
      url: 'https://ferozmohammad.vercel.app/projects',
      keywords: 'Feroz Mohammad Projects, Dario Lario Launch, SME Business Development, Wine Consulting, Artisan Leather Portfolio'
    });
  }
}
