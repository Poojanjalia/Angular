import { Component } from '@angular/core';
import {SVGIcon, cartIcon, calendarIcon, boldIcon,italicIcon,underlineIcon,alignCenterIcon,alignLeftIcon,alignRightIcon,alignJustifyIcon} from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-button-control-panel',
  templateUrl: './button-control-panel.component.html',
  styleUrls: ['./button-control-panel.component.css'],
 
})
export class ButtonControlPanelComponent {
  public Cart: SVGIcon = cartIcon;
  public Calendar: SVGIcon = calendarIcon;
  public boldIcon: SVGIcon = boldIcon;
  public italicIcon: SVGIcon = italicIcon;
  public underlineIcon: SVGIcon = underlineIcon;
  public alignCenterIcon: SVGIcon = alignCenterIcon;
  public alignLeftIcon: SVGIcon = alignLeftIcon;
  public alignRightIcon: SVGIcon = alignRightIcon;
  public alignJustifyIcon: SVGIcon = alignJustifyIcon;
}