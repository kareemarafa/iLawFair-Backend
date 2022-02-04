import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TeamAComponent } from './components/team-a/team-a.component'
import { TeamBComponent } from './components/team-b/team-b.component'

@NgModule({
  declarations: [TeamAComponent, TeamBComponent],
  imports: [CommonModule]
})
export class TeamModule {}
