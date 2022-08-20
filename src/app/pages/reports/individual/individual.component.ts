import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { AppComponent } from "src/app/app.component";
import { Log } from "src/app/models/log";
import { ReportService } from "src/app/shared/services/report.service";

@Component({
  selector: "app-individual",
  templateUrl: "./individual.component.html",
  styleUrls: ["./individual.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualComponent implements OnInit {
  data = {} as Log;
  ejecutado = false;
  logs = [];

  constructor(
    private report_service: ReportService,
    private appComponent: AppComponent,
    private changeDetector: ChangeDetectorRef
  ) {
    this.appComponent.viewAsLoginPage(true);
  }

  ngOnInit() {}

  getIndividualLog() {
    this.report_service
      .getIndividualLog(this.data.number_phone)
      .subscribe((data) => {
        this.ejecutado = true;
        debugger;
        this.logs = data.message;
        this.changeDetector.markForCheck();
      });
  }

  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
