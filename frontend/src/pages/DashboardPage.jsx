import React, { useState, useEffect } from "react";
import requestToServer from "../pages/services/requestToServer";
import Paper from '@material-ui/core/Paper';
import {
  SummaryState,
  IntegratedSummary,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSummaryRow,
  Toolbar,
} from '@devexpress/dx-react-grid-material-ui';
import {
  Plugin,
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import { withStyles } from '@material-ui/core/styles';
import GridMUI from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';

const styles = () => ({
  input: {
    fontSize: '14px',
    width: '90px',
  },
  label: {
    fontSize: '14px',
  },
  container: {
    maxWidth: '18em',
  },
  selector: {
    height: '32px',
  },
});


function Dashboard() {
  const [rows, setRows] = useState({
    columns: [
      { title: 'ID', name: 'ID', type: 'string' },
      { title: 'Parametr1', name: 'Parametr1'},
      { title: 'Parametr2', name: 'Parametr2'},
      { title: 'Parametr3', name: 'Parametr3'},
      { title: 'Parametr4', name: 'Parametr4'},
      { title: 'Parametr5', name: 'Parametr5'},
      { title: 'Parametr6', name: 'Parametr6'},
      { title: 'Parametr7', name: 'Parametr7'},
      { title: 'Parametr8', name: 'Parametr8'},
      { title: 'Parametr9', name: 'Parametr9'},
      { title: 'Parametr10', name: 'Parametr10'},
      { title: 'Parametr11', name: 'Parametr11'},
      { title: 'Parametr12', name: 'Parametr12'},
      { title: 'Parametr13', name: 'Parametr13'},
      { title: 'Parametr14', name: 'Parametr14'},
      { title: 'Parametr15', name: 'Parametr15'},
      { title: 'Parametr16', name: 'Parametr16'},
      { title: 'Parametr17', name: 'Parametr17'},
      { title: 'Parametr18', name: 'Parametr18'},
      { title: 'Parametr19', name: 'Parametr19'},
      { title: 'Parametr20', name: 'Parametr20'},
    ],
    data: []
  })
  
  const queryBody = `query{
    getEntities {
      ID
      Parametr1
      Parametr2
      Parametr3
      Parametr4
      Parametr5
      Parametr6
      Parametr7
      Parametr8
      Parametr9
      Parametr10
      Parametr11
      Parametr12
      Parametr13
      Parametr14
      Parametr15
      Parametr16
      Parametr17
      Parametr18
      Parametr19
      Parametr20
    }
  }`

  useEffect(() => {
    function getData() {
      return requestToServer(queryBody)
        .then(responce => responce.getEntities)
          .then(result => {
            setRows((prevState) => {
            const data = result;
            return {...prevState, data};
            })
          })
        .catch(error => {
          console.log("Error in requestToServer:", error);
        })
    }
    setInterval(() => getData(), 5000);
  }, [queryBody]);

  const [tableColumnExtensions] = useState([
    { columnName: 'ID', align: 'left' },
  ]);

  const [startEditAction, setStartEditAction] = useState('max');

  const EditPropsPanel = props => (
    <Plugin name="EditPropsPanel">
      <Template name="toolbarContent">
        <TemplatePlaceholder />
        <StartEditActionSelector {...props} />
      </Template>
    </Plugin>
  );
    
  let [totalSummaryItems, setTotalSummaryItems] = useState([
    { columnName: 'Parametr1', type: 'max'},
    { columnName: 'Parametr2', type: 'max'},
    { columnName: 'Parametr3', type: 'max'},
    { columnName: 'Parametr4', type: 'max'},
    { columnName: 'Parametr5', type: 'max'},
    { columnName: 'Parametr6', type: 'max'},
    { columnName: 'Parametr7', type: 'max'},
    { columnName: 'Parametr8', type: 'max'},
    { columnName: 'Parametr9', type: 'max'},
    { columnName: 'Parametr10', type: 'max'},
    { columnName: 'Parametr11', type: 'max'},
    { columnName: 'Parametr12', type: 'max'},
    { columnName: 'Parametr13', type: 'max'},
    { columnName: 'Parametr14', type: 'max'},
    { columnName: 'Parametr15', type: 'max'},
    { columnName: 'Parametr16', type: 'max'},
    { columnName: 'Parametr17', type: 'max'},
    { columnName: 'Parametr18', type: 'max'},
    { columnName: 'Parametr19', type: 'max'},
    { columnName: 'Parametr20', type: 'max'},
  ]);
  
const StartEditActionSelectorBase = (props) => {
  const { defaultAction, changeAction, classes } = props;
  return (
    <GridMUI
      container
      alignItems="center"
      className={classes.container}
    >
      <Typography
        className={classes.label}
      >
        Start Edit Action:
        &nbsp;
      </Typography>
      <Select
        onChange={e => {
          changeAction(e.target.value)
          console.log(`setTotal`, e.target.value)
          setTotalSummaryItems([
            { columnName: 'Parametr1', type: e.target.value},
            { columnName: 'Parametr2', type: e.target.value},
            { columnName: 'Parametr3', type: e.target.value},
            { columnName: 'Parametr4', type: e.target.value},
            { columnName: 'Parametr5', type: e.target.value},
            { columnName: 'Parametr6', type: e.target.value},
            { columnName: 'Parametr7', type: e.target.value},
            { columnName: 'Parametr8', type: e.target.value},
            { columnName: 'Parametr9', type: e.target.value},
            { columnName: 'Parametr10', type: e.target.value},
            { columnName: 'Parametr11', type: e.target.value},
            { columnName: 'Parametr12', type: e.target.value},
            { columnName: 'Parametr13', type: e.target.value},
            { columnName: 'Parametr14', type: e.target.value},
            { columnName: 'Parametr15', type: e.target.value},
            { columnName: 'Parametr16', type: e.target.value},
            { columnName: 'Parametr17', type: e.target.value},
            { columnName: 'Parametr18', type: e.target.value},
            { columnName: 'Parametr19', type: e.target.value},
            { columnName: 'Parametr20', type: e.target.value},
          ])
        }}
        value={defaultAction}
        className={classes.selector}
        input={(
          <OutlinedInput
            classes={{ input: classes.input }}
            labelWidth={0}
            margin="dense"
          />
        )}
      >
        <MenuItem value="max">Max</MenuItem>
        <MenuItem value="min">Min</MenuItem>
        <MenuItem value="sum">Sum</MenuItem>
        <MenuItem value="avg">Avg</MenuItem>
      </Select>
    </GridMUI>
  );
};

const HighlightedText = ({ value, style, ...restProps }) => (
  <Table.Cell style={(value < 0 && value > -1) ? { background: `rgba(255, 140, 0,${Math.abs(value)})`} : 
    (value === 0) ? { background: 'rgb(255, 255, 255)'} : 
      (value > 0 && value < 1) ? { background: `rgba(0, 0, 0,${Math.abs(value)})`, color: 'red' } : { background: "white"}}>
    <span >{value}</span>
  </Table.Cell>
);

const StartEditActionSelector = withStyles(styles, { name: 'StartEditActionSelector' })(StartEditActionSelectorBase);

  return (
    <Paper>
      <Grid
        rows={rows.data}
        columns={rows.columns}
      >
        <Toolbar />
        <EditPropsPanel
          defaultAction={startEditAction}
          changeAction={setStartEditAction}
        />
        <SummaryState
          totalItems={totalSummaryItems}
        />
        <IntegratedSummary />
        <Table
          columnExtensions={tableColumnExtensions}
          cellComponent={HighlightedText}
        />
        <TableHeaderRow />
        <TableSummaryRow />
        
        
      </Grid>
    </Paper>
  );
}

export default Dashboard;