import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent as ContactFormComponent } from '../../components/contact/contact.component';

import { SeoService } from '../../service/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact – Feroz Mohammad',
      description: 'Get in touch with Feroz Mohammad for collaboration opportunities, business inquiries, or professional discussions. Connect with a business banking professional and co-founder of Dario Lario, specializing in sustainable artisan leather goods.',
      url: 'https://ferozmohammad.vercel.app/contact',
      keywords: 'Contact Feroz Mohammad, Business Banking Professional, Entrepreneur Contact, Dario Lario, Artisan Leather, Collaboration'
    });
  }
}
