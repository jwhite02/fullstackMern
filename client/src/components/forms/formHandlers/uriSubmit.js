//import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function uriSubmit(values, dispatch, props) {
  return sleep(1000).then(() => {
    // simulate server latency
    console.log("This is for props:  " + props);
    console.log("This is for the submit " + values.cheeseUrl);
    console.log("This is the hidden value:  " + values.dName);
  });
}

export default uriSubmit;
