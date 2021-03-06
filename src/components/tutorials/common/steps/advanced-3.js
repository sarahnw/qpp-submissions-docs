import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Advanced3 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <p>Response code:</p>
          <pre>200 OK</pre>
          <p>Response body:</p>
          <pre>
            {`{
  "data": {
    "score": {
      "name": "final",
      "title": "Final Score",
      "detail": "",
      "value": 14.5,
      "parts": [
        {
          "name": "ia",
          "title": "IA component of final score",
          "detail": "No measurement set to score.",
          "value": 0
        },
        {
          "name": "aci",
          "title": "ACI component of final score",
          "detail": "Scoring based on measurement set \\"b702d4ee-5a75-4e10-9aaf-3539123956e7\\" from submission method \\"cmsWebInterface\\" with weight of 25%.",
          "value": 14.5,
          "original": {
            "name": "aci",
            "title": "Advancing Care Information Score",
            "value": 58,
            "parts": [
              {
                "name": "aci_base",
                "value": 58,
                "detail": "",
                "parts": [
                  {
                    "name": "ACI_PEA_1",
                    "value": 5
                  },
                  {
                    "name": "ACI_HIE_1",
                    "value": 1
                  },
                  {
                    "name": "ACI_HIE_2",
                    "value": 2
                  }
                ],
                "warnings": []
              },
              {
                "name": "aci_performance",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "aci_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              },
              {
                "name": "cehrt_bonus",
                "value": 0,
                "detail": "",
                "parts": [],
                "warnings": []
              }
            ],
            "warnings": []
          }
        }
      ]
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced3;
