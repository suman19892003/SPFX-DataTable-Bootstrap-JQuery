import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'JqueryBootstrapWebPartStrings';
import JqueryBootstrap from './components/JqueryBootstrap';
import { IJqueryBootstrapProps } from './components/IJqueryBootstrapProps';

//For JQUERY and Bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../../node_modules/popper.js/dist/popper.js';

//For Datatable
import '../../../node_modules/datatables.net/js/jquery.dataTables.min.js';
import '../../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css';



import { SPComponentLoader } from '@microsoft/sp-loader'

export interface IJqueryBootstrapWebPartProps {
  description: string;
}

export default class JqueryBootstrapWebPart extends BaseClientSideWebPart<IJqueryBootstrapWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IJqueryBootstrapProps> = React.createElement(
      JqueryBootstrap,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
