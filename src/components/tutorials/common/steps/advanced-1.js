import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';
import submissionObject from './advanced-tutorial-submission.json';

const submissionJsonString = JSON.stringify(submissionObject, null, 4);
const cssClass = 'example-code-tabs';

class Advanced1 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>{`${submissionJsonString}`}</pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>422 Unprocessable Entity</pre>
          <p>Response body:</p>
          <pre>
            {`{
  "error": {
    "type": "DuplicateEntryError",
    "message": "Duplicate entry for key unique_performance_year_entity_type_npi_and_tin_encrypted"
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced1;
