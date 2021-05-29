import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddNotePage } from './add-note.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AddNotePageRoutingModule } from './add-note-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AddNotePageRoutingModule
  ],
  declarations: [AddNotePage]
})
export class AddNoteModule {}
