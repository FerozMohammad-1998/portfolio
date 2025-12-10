import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent as ResumeContentComponent } from '../../components/resume/resume.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-resume-page',
  standalone: true,
  imports: [CommonModule, ResumeContentComponent],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Resume – Feroz Mohammad',
      description: 'Download or view Feroz Mohammad’s professional resume. Detailed overview of skills, experience, and achievements in business banking, entrepreneurship, and co-founding Dario Lario, a sustainable artisan leather brand.',
      url: 'https://ferozmohammad.vercel.app/resume',
      keywords: 'Feroz Mohammad Resume, Business Banking CV, Entrepreneur CV, Dario Lario, Artisan Leather, Professional Achievements'
    });
  }
}
