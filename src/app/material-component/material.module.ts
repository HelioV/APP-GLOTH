import { SignificadoKimbundoComponent } from './Words/Palavra/Significado-Kimbundo/Significado-Kimbundo.component';
import { PalavraNaoAprovadaComponent } from './Words/Palavra/PalavraSugerida/PalavraNaoAprovada/PalavraNaoAprovada.component';
import { PalavraSugeridaComponent } from './Words/Palavra/PalavraSugerida/PalavraSugerida.component';
import { AdicionarPalavraCompletaComponent } from './Words/Palavra/AdicionarPalavraCompleta/AdicionarPalavraCompleta.component';
import { EditarPlavraComponent } from './Words/Palavra/EditarPlavra/EditarPlavra.component';
import { EliminarPlavraComponent } from './Words/Palavra/EliminarPlavra/EliminarPlavra.component';
import { AdicionarPalavraComponent } from './Words/Palavra/AdicionarPalavra/AdicionarPalavra.component';
import { ListaPalavraComponent } from './Words/Palavra/ListaPalavra/ListaPalavra.component';
import { SignificadosPalavraComponent } from './Words/Palavra/Significados-Palavra/Significados-Palavra.component';
import { PalavraComponent } from './Words/Palavra/Palavra.component';
import { SugestoesComponent } from './Sugestoes/Sugestoes.component';
import { PalavrasComponent } from './Palavras/Palavras.component';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { CdkTableModule } from '@angular/cdk/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialRoutes } from './material.routing';
import { ButtonsComponent } from './buttons/buttons.component';
 
import { GridComponent } from './grid/grid.component';
import { ListsComponent } from './lists/lists.component';
import { MenuComponent } from './menu/menu.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ChipsComponent } from './chips/chips.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressComponent } from './progress/progress.component';
import { MatCardModule } from '@angular/material/card';
import {
  DialogComponent,
  DialogOverviewExampleDialogComponent
} from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatListModule} from '@angular/material/list';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    DemoMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    ScrollingModule,
    MatListModule
  ],
  providers: [],
  entryComponents: [DialogOverviewExampleDialogComponent],
  declarations: [
    ButtonsComponent,
    GridComponent,
    ListsComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    ExpansionComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    PalavrasComponent,
    SugestoesComponent,
    SignificadosPalavraComponent,
    PalavraComponent
    ,
    ListaPalavraComponent,
    AdicionarPalavraComponent,
    EditarPlavraComponent,
    EliminarPlavraComponent,
    AdicionarPalavraCompletaComponent,
    PalavraSugeridaComponent,
    PalavraNaoAprovadaComponent,
    SignificadoKimbundoComponent
  ]
})
export class MaterialComponentsModule {}
