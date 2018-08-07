import {Component, Input, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'rt-inline-dialog',
  templateUrl: './inline-dialog.component.html',
  styleUrls: ['./inline-dialog.component.scss']
})
export class InlineDialogComponent {

  @Input() title = null;
  @Input() okLabel = null;
  @Input() cancelLabel = null;

  @ViewChild(TemplateRef) template: TemplateRef<any>;

  private dialogRef: MatDialogRef<any>;

  constructor(
    private dialog: MatDialog
  ) { }

  public async open(): Promise<any> {
    this.dialogRef = this.dialog.open(this.template);
    return this.dialogRef.afterClosed().toPromise();
  }

  public onOkClicked() {
    this.dialogRef.close(true);
  }

  public onCancelClicked() {
    this.dialogRef.close(false);
  }
}
