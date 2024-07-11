import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Examen } from '../models/Examen';
import { ExamServiceService } from '../Services/exam-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-matiere-exams',
  templateUrl: './matiere-exams.component.html',
  styleUrls: ['./matiere-exams.component.scss']
})
export class MatiereExamsComponent implements OnInit {
  exams: Examen[] = [];
  selectedExam: Examen | null = null;
  display: boolean = false;
  deadlinePassed: boolean = false;
  file: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private examService: ExamServiceService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const idMatiere = Number(this.route.snapshot.paramMap.get('id'));
    if (idMatiere) {
      this.loadExams(idMatiere);
    }
  }

  loadExams(idMatiere: number): void {
    this.examService.getExamsByMatiere(idMatiere).subscribe(
      (data: Examen[]) => {
        this.exams = data.map(exam => {
          exam.deadline = new Date(exam.deadline);
          return exam;
        });
      },
      error => {
        console.error('Erreur lors du chargement des examens :', error);
      }
    );
  }

  openPopup(exam: Examen): void {
    this.selectedExam = exam;
    this.deadlinePassed = new Date() > exam.deadline;
    this.display = true;
  }

  isDeadlinePassed(): boolean {
    return this.deadlinePassed;
  }

  onFileChange(event: any): void {
    this.file = event.target.files[0];
  }

  submitWork(): void {
    if (this.file && this.selectedExam) {
      const examId = this.selectedExam.id; // Suppression de la conversion en Number
      this.examService.uploadWork(examId, this.file).subscribe(
        (response: any) => {
          this.selectedExam!.travail = response.fileUrl;
          this.display = false;
        },
        (error: any) => {
          console.error('Erreur lors du téléchargement du fichier :', error);
        }
      );
    }
  }
}
