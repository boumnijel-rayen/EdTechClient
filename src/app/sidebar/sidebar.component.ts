import { Component, ViewChild } from '@angular/core';
import { Sidebar, SidebarModule } from 'primeng/sidebar';
import {ButtonModule}  from 'primeng/button';
import {SplitterModule} from 'primeng/splitter'
import { MegaMenuItem } from 'primeng/api';
import { AuthServiceService } from '../Services/auth-service.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  items: MegaMenuItem[] | undefined;
  user : any
  checkGesUsers : any
  constructor(private auth : AuthServiceService, private router : Router){
  }

  ngOnInit() {
    this.checkGesUsers = this.auth.getRoles().includes('ADMIN');
    console.log(this.checkGesUsers)
      this.items = [
          {
              label: 'Company',
              root: true,
              items: [
                  [
                      {
                          items: [
                              { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                              { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                              { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [
                              { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                              { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                              { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [
                              { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                              { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                              { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
                          ]
                      }
                  ],
                  [
                      {
                          items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
                      }
                  ]
              ]
          },
          {
              label: 'Resources',
              root: true
          },
          {
              label: 'Contact',
              root: true
          }
      ];
  }

  sidebarVisible: boolean = false;

  logout(){
    this.auth.deleteEmail();
    this.auth.deleteToken();
    this.auth.deleteRoles();
    this.router.navigate(['/']);
  }

}
