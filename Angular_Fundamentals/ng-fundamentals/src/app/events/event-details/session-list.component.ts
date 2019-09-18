import { Component, Input, OnChanges } from "@angular/core";
import { Isession } from "src/app/shared/event.model";

@Component({
  selector: "session-list",
  templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Isession[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSession: Isession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === "name"
        ? this.visibleSession.sort(sortByNamesAsc)
        : this.visibleSession.sort(sortByVotesDesc);
    }
  }
  filterSessions(filter) {
    if (filter === "all") {
      this.visibleSession = [...this.sessions];
    } else {
      this.visibleSession = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }
}

function sortByNamesAsc(s1: Isession, s2: Isession) {
  if (s1.name > s2.name) return 1;
  else if (s1.name === s2.name) return 0;
  else return -1;
}
function sortByVotesDesc(s1: Isession, s2: Isession) {
  return s2.voters.length - s1.voters.length;
}
