import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExperienceService } from '../services/experience/experience.service';
import { IExperience } from '../shared/models/experience.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public experience: IExperience;

  constructor(
      private route: ActivatedRoute, 
      private experienceService: ExperienceService
    ) { }

  ngOnInit(): void {
    this.getParams();
  }

  private getParams(): void {
    this.route.params.subscribe(params => {             
        this.getDetailExp(params.id);
        
    });
  }

  private getDetailExp(id: string): void {
      this.experienceService.getExperienceById(id).subscribe(response => {      
      this.experience = response.experience;      
    });
  }

}
