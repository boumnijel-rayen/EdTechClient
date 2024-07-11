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
    this.loadClasses();

    this.classForm = this.fb.group({
      id: [null],
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
    this.newClass = { ...cls }; // Copy class details to the form
    this.classForm.patchValue(this.newClass);
    this.displayAddClassDialog = true;
  }

  deleteClasse(cls: Classe) {
    this.classesService.deleteClasse(cls.id).subscribe(() => {
      this.classes = this.classes.filter(c => c.id !== cls.id);
      this.messageService.add({ severity: 'success', summary: 'Class Deleted', detail: cls.nom, life: 3000 });
    });
  }

  deleteStudent(classeId: number, email: string) {
    this.classesService.removeStudentFromClass(email, classeId).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Student Deleted', detail: email, life: 3000 });
      this.loadClasses(); // Refresh the class list
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
    this.newClass = new Classe(); // Reset newClass
    this.classForm.reset(); // Reset form
    this.displayAddClassDialog = true;
  }

  showAddStudentDialog(classeId: number) {
    this.selectedClassId = classeId;
    this.displayAddStudentDialog = true;
  }

  addClass() {
    if (this.classForm.valid) {
      this.newClass = { ...this.classForm.value };

      if (this.newClass.id) {
        this.classesService.updateClasse(this.newClass.id, this.newClass).subscribe(() => {
          this.displayAddClassDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Class Updated', detail: this.newClass.nom, life: 3000 });
          this.loadClasses();
        });
      } else {
        this.classesService.addClasse(this.newClass).subscribe(() => {
          this.displayAddClassDialog = false;
          this.messageService.add({ severity: 'success', summary: 'Class Added', detail: this.newClass.nom, life: 3000 });
          this.loadClasses();
        });
      }
    }
  }

  addStudent() {
    if (this.studentForm.valid) {
      const email = this.studentForm.value.studentId;
      this.classesService.addStudentToClass(email, this.selectedClassId).subscribe(() => {
        this.displayAddStudentDialog = false;
        this.messageService.add({ severity: 'success', summary: 'Student Added', detail: email, life: 3000 });
        this.loadClasses();
      });
    }
  }

  loadClasses() {
    this.classesService.getAllClasses().subscribe((data) => {
      this.classes = data;
    });
  }
}
