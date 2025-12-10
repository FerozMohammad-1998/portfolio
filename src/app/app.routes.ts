import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ExperienceComponent } from "./pages/experience/experience.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { UrlNormalizationGuard } from "./guards/url-normalization.guard";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Home',
      description: 'Feroz Mohammad - Business Banking Professional, Entrepreneur, and Wine Consultant. Explore my portfolio, experience, and projects.',
      keywords: 'Feroz Mohammad, Business Banking, Entrepreneur, Wine Consultant, Portfolio, Professional Experience'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'About Me',
      description: 'Learn about Feroz Mohammad, a business banking professional and co-founder of Dario Lario with expertise in SME portfolio management, sales, and wine consulting.',
      keywords: 'About Feroz Mohammad, Business Banking Professional, Entrepreneur Profile, Dario Lario, Wine Consultant'
    }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Experience',
      description: 'Explore Feroz Mohammad\'s professional journey, including his roles in business development, banking, and entrepreneurship. View detailed achievements and project highlights.',
      keywords: 'Feroz Mohammad Experience, Business Banking Career, Entrepreneurial Projects, Wine Consulting, Professional Achievements'
    }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Projects',
      description: 'Showcase of Feroz Mohammad\'s projects, including Dario Lario brand launch, wine events, and business development initiatives with SMEs.',
      keywords: 'Feroz Mohammad Projects, Dario Lario Launch, SME Business Development, Wine Events, Portfolio Projects'
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Contact',
      description: 'Get in touch with Feroz Mohammad for collaboration opportunities, business inquiries, or professional discussions.',
      keywords: 'Contact Feroz Mohammad, Business Banking Contact, Entrepreneur Contact, Wine Consulting, Collaboration'
    }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    canActivate: [UrlNormalizationGuard],
    data: {
      title: 'Resume',
      description: 'Download or view Feroz Mohammad\'s professional resume. Detailed overview of skills, experience, and achievements in business development, banking, and entrepreneurship.',
      keywords: 'Feroz Mohammad Resume, Business Banking CV, Entrepreneur CV, Wine Consultant Resume, Professional Achievements'
    }
  },
  // Legacy hash-based URL redirects
  {
    path: 'about-me',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'skills',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  {
    path: 'testimonials',
    redirectTo: '/experience',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' } // Wildcard route for 404 pages
];

