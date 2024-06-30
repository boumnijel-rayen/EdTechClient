import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrl: './confirm-account.component.scss'
})
export class ConfirmAccountComponent implements OnInit, AfterViewInit{

  @ViewChild('codeArea') codeArea!: ElementRef;
  @ViewChildren('codeInput') codeInputs!: QueryList<ElementRef>;
  @ViewChild('feedback') feedback!: ElementRef;
  // @ViewChild('feedbackImage') feedbackImage!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  successURL: string = "https://c.tenor.com/5wXA61gEUuAAAAAC/conc.gif";
  storedCode: string = "111111";
  userCode: string = "";
  inputs: number[] = [1, 2, 3, 4, 5, 6]; // Adjust the number of inputs as needed
  test : any

  constructor(private renderer: Renderer2, private auth : AuthServiceService, private router : Router) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    this.userCode = "";
    this.codeInputs.forEach((codeInput, index) => {
      const inputEl = codeInput.nativeElement as HTMLInputElement;
      inputEl.value = "";
      inputEl.disabled = index !== 0;
      if (index === 0) inputEl.focus();
      this.renderer.listen(inputEl, 'input', (e) => this.handleInput(e, inputEl));
    });
  }

  handleInput(event: Event, codeInput: HTMLInputElement) {
    const val = (event.target as HTMLInputElement).value || "";
    codeInput.value = val;
    const isValid = val.length == 1 && parseInt(val) >= 0 && parseInt(val) < 10;
    if (!isValid) {
      this.renderer.addClass(codeInput, 'error');
      return;
    }
    this.userCode += parseInt(val);
    this.renderer.removeClass(codeInput, 'error');
    codeInput.disabled = true;
    const nextInput = codeInput.nextElementSibling as HTMLInputElement;
    if (nextInput) {
      nextInput.disabled = false;
      nextInput.focus();
    } else {
      codeInput.blur();
      this.renderer.addClass(this.codeArea.nativeElement, 'shrink');
      this.evaluate(this.userCode);
    }
  }

  async evaluate(code: string) {

    this.auth.confirm(this.auth.getEmail(), code).subscribe((data : any) => {
      this.auth.setToken(data.token);
      this.router.navigate(['/app'])
    },
    (error : any) => {
      this.handleError()
    })
  }

  handleError() {
    this.test = true;
    // this.feedbackImage.nativeElement.src = "https://cdn-icons-png.flaticon.com/512/463/463612.png";
    // this.renderer.addClass(this.feedbackImage.nativeElement, 'grow');
    this.renderer.setStyle(this.feedback.nativeElement, 'height', '180px');
    setTimeout(() => {
      this.renderer.addClass(this.sendButton.nativeElement, 'grow');
    }, 300);
  }

  async serverSideValidation(code: string) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  }

  restoreInputs() {
      this.userCode = "";
    // this.renderer.removeClass(this.feedbackImage.nativeElement, 'grow');
    this.test = false
    this.renderer.removeClass(this.sendButton.nativeElement, 'grow');
    this.codeInputs.forEach((codeInput, index) => {
      const inputEl = codeInput.nativeElement as HTMLInputElement;
      inputEl.value = "";
      inputEl.disabled = index !== 0;
      if (index === 0) inputEl.focus();
    });
    this.renderer.removeClass(this.codeArea.nativeElement, 'shrink');
    this.renderer.setStyle(this.feedback.nativeElement, 'height', '0px');
  }
  

}
