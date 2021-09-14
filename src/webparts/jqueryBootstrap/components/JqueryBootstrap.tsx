import * as React from 'react';
import styles from './JqueryBootstrap.module.scss';
import { IJqueryBootstrapProps } from './IJqueryBootstrapProps';
import { escape } from '@microsoft/sp-lodash-subset';
import $ from 'jquery';
import DataTable from './DataTable';

export default class JqueryBootstrap extends React.Component<IJqueryBootstrapProps, {}> {

  componentDidMount(){
    $(document).ready(function(){
      //alert('Jquery Loaded.')
    })
  }

  public render(): React.ReactElement<IJqueryBootstrapProps> {
    return (
      <div className={ styles.jqueryBootstrap }>
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card Using Bootstrap And Jquery</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
<h3>Bootstrap table</h3>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>

    <DataTable description='Datatable'></DataTable>

    </div>
    );
  }
}
