import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ClassesService } from '../Services/classes.service';
import { Classe } from '../Models/Classe';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
  providers: [MessageService]
})
export class ClassesComponent implements OnInit {
  classes: Classe[] = [];
  expandedRows: { [key: string]: boolean } = {};
  displayAddClassDialog: boolean = false;
  displayAddStudentDialog: boolean = false;
  newClass: Classe = new Classe();
  classForm!: FormGroup;
  studentForm!: FormGroup;
  selectedClassId!: number;

  constructor(
    private classesService: ClassesService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.classesService.getAllClasses().subscribe((data) => {
      this.classes = data;
    });

    this.classForm = this.fb.group({
      nom: ['', Validators.required],
      specialite: ['', Validators.required],
      nbreEtudiant: [0, Validators.required],
      nbreCapacite: [0, Validators.required]
    });

    this.studentForm = this.fb.group({
      studentId: ['', Validators.required]
    });
  }

  expandAll() {
    this.expandedRows = this.classes.reduce((acc: { [key: string]: boolean }, cls: Classe) => {
      acc[cls.id.toString()] = true;
      return acc;
    }, {});
  }

  editClass(cls: Classe) {
    this.classesService.updateClasse(cls).subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Edit Class', detail: cls.nom, life: 3000 });
    });
  }

  deleteClasse(cls: Classe) {
    this.classesService.deleteClasse(cls.id).subscribe(() => {
      this.classes = this.classes.filter(c => c.id !== cls.id);
      this.messageService.add({ severity: 'success', summary: 'Class Deleted', detail: cls.nom, life: 3000 });
    });
  }

  collapseAll() {
    this.expandedRows = {};
  }

  onRowExpand(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Class Expanded', detail: event.data.nom, life: 3000 });
  }

  onRowCollapse(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Class Collapsed', detail: event.data.nom, life: 3000 });
  }

  showAddClassDialog() {
    this.displayAddClassDialog = true;
  }

  showAddStudentDialog(classeId: number) {
    this.selectedClassId = classeId;
    this.displayAddStudentDialog = true;
  }

  addClass() {
    if (this.classForm.valid) {
      this.newClass.nom = this.classForm.value.nom;
      this.newClass.specialite = this.classForm.value.specialite;
      this.newClass.nbreEtudiant = this.classForm.value.nbreEtudiant;
      this.newClass.nbreCapacite = this.classForm.value.nbreCapacite;

      this.classesService.addClasse(this.newClass).subscribe(() => {
        this.displayAddClassDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Class Added', detail: this.newClass.nom, life: 3000 });
        this.newClass = new Classe();
        this.classForm.reset();
      });
    }
  }

  addStudent() {
    if (this.studentForm.valid) {
      const email = this.studentForm.value.studentId;
      this.classesService.addStudentToClass(email, this.selectedClassId).subscribe(() => {
        this.displayAddStudentDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Student Added', detail: email, life: 3000 });
        this.studentForm.reset();
        // Optionally, refresh the class list or the student list in the expanded row.
      });
    }
  }
}
