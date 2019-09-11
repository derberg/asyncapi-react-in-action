export const theme = {
  asyncApiWrapper: [
    "\n      font-family: '72';\n      font-size: 14px;\n      line-height: 20px;\n      font-weight: 400;\n      -webkit-font-smoothing: antialiased;\n      font-smoothing: antialiased;\n      background: #f3f4f5;\n    "
  ],
  header: ["\n    "],
  headerParagraph: ["\n    "],
  h1: ["\n    "],
  h2: ["\n    "],
  h3: ["\n    "],
  h4: ["\n    "],
  h5: ["\n    "],
  h6: ["\n    "],
  hrefHeader: ["\n      color: #0b74de;\n    "],
  markdown: [
    "\n      > div {\n        > ul {\n          margin: 0;\n          padding-left: 16px;\n        }\n        > p {\n          margin: 0;\n          > code {\n            display: inline-block;\n            font-weight: bold;\n            font-size: 10px;\n            line-height: 14px;\n            border-radius: 3px;\n            padding: 0px 5px;\n            text-align: center;\n            background: #e2eaf2;\n            color: #18873d;\n          }\n        }\n      }\n    "
  ],
  table: [
    "\n      margin: 0 0 20px 0;\n      width: 100%;\n      border-spacing: 0;\n      font-size: 13px;\n    "
  ],
  tableHeader: [
    "\n      width: 100%;\n      color: #939698;\n      background: #f9fafa;\n      text-transform: uppercase;\n    "
  ],
  tableHeaderTitle: ["\n      line-height: 30px;\n    "],
  tableHeaderRow: [
    "\n      font-weight: lighter;\n      font-size: 11px;\n    "
  ],
  tableHeaderCell: [
    "\n      padding: 12px 20px;\n      text-align: left;\n    "
  ],
  tableBody: ["\n      color: #000;\n    "],
  tableBodyRow: ["\n      background: #fff;\n    "],
  tableBodyRowWithNested: [
    "\n      > td > div {\n        display: block;\n        padding: 0px;\n        max-height: 0;\n        overflow: hidden;\n        transition: all 1s ease;\n      }\n    "
  ],
  tableBodyCell: [
    "\n      padding: 12px 20px;\n      vertical-align: top;\n      border-bottom: 1px solid #efeff0;\n  \n      > p {\n        margin-top: 0;\n      }\n    "
  ],
  tableBodyCellWithNested: ["\n    "],
  tableNested: [
    "\n      margin: 10px 10px 10px auto;\n      width: calc(100% - 45px);\n      border-spacing: 0;\n      font-size: 13px;\n      border-radius: 5px;\n      border: solid 1px #d4d4d4;\n      background-color: #f9fafa;\n    "
  ],
  tableHeaderNested: [
    "\n      color: #939698;\n      border-bottom: solid 1px #d4d4d4;\n      font-weight: bold;\n      text-align: left;\n      padding: 6px 0;\n      font-size: 12px;\n    "
  ],
  tableHeaderTitleNested: [
    "\n      color: #939698;\n  \n      > td {\n        border-bottom: solid 1px #d4d4d4;\n        padding: 8px 20px;\n        font-size: 12px;\n        color: #818487;\n      }\n    "
  ],
  tableHeaderRowNested: ["\n      color: #939698;\n    "],
  tableHeaderCellNested: [
    "\n      width: 20%;\n      padding: 8px 20px;\n      font-size: 12px;\n      border-bottom: solid 1px #d4d4d4;\n    "
  ],
  tableBodyNested: ["\n      color: #000;\n    "],
  tableBodyRowNested: [
    "\n      color: #333;\n      border-bottom: solid 1px #d4d4d4;\n  \n      &:last-child {\n        > td {\n          border-bottom: none;\n        }\n      }\n    "
  ],
  tableBodyCellNested: [
    "\n      padding: 8px 20px;\n      vertical-align: top;\n      font-size: 13px;\n      border-bottom: solid 1px #d4d4d4;\n    "
  ],
  treeSpace: ["\n      display: inline-block;\n      width: 20px;\n    "],
  treeLeaf: [
    "\n      display: inline-block;\n      position: relative;\n      width: 25px;\n  \n      &:before {\n        content: '';\n        position: absolute;\n        top: -15px;\n        width: 13px;\n        height: 10px;\n        border-left: #aaa 2px solid;\n        border-bottom: #aaa 2px solid;\n        border-radius: 0 0 0 70%;\n      }\n    "
  ],
  badge: [
    "\n      display: inline-block;\n      font-weight: bold;\n      font-size: 11px;\n      line-height: 18px;\n      border-radius: 3px;\n      padding: 0px 5px;\n      text-align: center;\n      text-transform: uppercase;\n      background: #e2eaf2;\n    "
  ],
  publishBadge: ["\n      color: #18873d;\n    "],
  subscribeBadge: ["\n      color: #107ee3;\n    "],
  deprecatedBadge: ["\n      margin-left: 10px;\n      color: #f59702;\n    "],
  requiredBadge: [
    "\n      font-size: 9px;\n      line-height: 14px;\n      color: #f59702;\n      border-radius: 3px;\n      margin-left: 10px;\n    "
  ],
  generatedBadge: [
    "\n      font-size: 9px;\n      line-height: 14px;\n      color: #18873d;\n      border-radius: 3px;\n      margin-left: 10px;\n    "
  ],
  tag: [
    "\n      display: inline-block;\n      mix-blend-mode: multiply;\n      border-radius: 4px;\n      background-color: #e2eaf2;\n      font-size: 11px;\n      font-family: 72;\n      font-weight: 300;\n      text-transform: uppercase;\n      font-weight: normal;\n      font-style: normal;\n      font-stretch: normal;\n      line-height: normal;\n      letter-spacing: normal;\n      color: #73787d;\n      padding: 3px 8px;\n      margin: 0 5px 0 0;\n    "
  ],
  codeWrapper: [
    "\n      border: 1px solid #e4e4e4;\n      border-radius: 5px;\n      background: #fff;\n    "
  ],
  codeHeader: [
    "\n      padding: 12px 20px;\n      border-bottom: 1px solid #e4e4e4;\n  \n      > h4 {\n        margin: 0;\n        color: #32363a;\n        font-size: 13px;\n      }\n    "
  ],
  codeContentWrapper: ["\n      margin: 0;\n      font-size: 13px;\n    "],
  codeContent: [
    "\n      font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace !important;\n      margin: 0 !important;\n      padding: 12px 20px !important;\n      background: #fff !important;\n      font-size: 12px !important;\n    "
  ],
  info: [
    "\n      margin-top: 24px;\n      background: #fff;\n      border-radius: 5px;\n      padding: 16px;\n    "
  ],
  infoHeader: ["\n      > h1 {\n        margin-top: 0;\n      }\n    "],
  contact: ["\n      margin-top: 24px;\n    "],
  contactHeader: ["\n    "],
  contactList: ["\n      margin: 0;\n      padding-left: 16px;\n    "],
  license: ["\n      margin-top: 24px;\n    "],
  licenseHeader: ["\n    "],
  licenseList: ["\n      margin: 0;\n      padding-left: 16px;\n    "],
  servers: [
    "\n      margin-top: 24px;\n      > table {\n        margin-bottom: 0;\n      }\n    "
  ],
  serverExpandIcon: [
    '\n      display: inline-block;\n      position: relative;\n      width: 10px;\n      height: 10px;\n      margin-right: 10px;\n      transform-origin: 50% 50%;\n      transition: .5s ease;\n      cursor: pointer;\n  \n      &:before {\n        content: "";\n        font-family: SAP-icons;\n        position: absolute;\n        color: #0071d4;\n        font-size: 12px;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n      }\n    '
  ],
  serversHeader: ["\n    "],
  serverVariablesEnumList: [
    "\n      margin: 0 0 0 15px;\n      padding: 0;\n    "
  ],
  serverVariablesEnumElement: ["\n    "],
  topics: [
    "\n      margin-top: 24px;\n      background: #fff;\n      border-radius: 5px;\n      padding: 16px;\n    "
  ],
  topicsHeader: ["\n      > h2 {\n        margin: 0 0 24px 0;\n      }\n    "],
  topic: [
    "\n      margin-bottom: 24px;\n      padding-left: 18px;\n      position: relative;\n  \n      &:before {\n        content: '';\n        position: absolute;\n        border: 3px solid #0071d4;\n        border-radius: 100%;\n        left: 0;\n        top: 6px;\n      }\n  \n      &:last-child {\n        margin-bottom: 0;\n      }\n    "
  ],
  topicHeader: [
    "\n      > h3 {\n        color: #0b74de;\n        font-size: 15px;\n      }\n    "
  ],
  topicHeaderBadge: [
    "\n      display: block;\n      float: left;\n      margin-top: -2px;\n      margin-right: 10px;\n    "
  ],
  topicMessage: [
    "\n      > div {\n        padding-left: 0;\n  \n        &:before {\n          border: none;\n          border-radius: 0;\n          left: 0;\n          top: 0;\n        }\n      }\n    "
  ],
  topicHeaderMessage: [
    "\n      color: #32363a;\n  \n      > h4 {\n        margin: 16px 0 16px 0;\n      }\n    "
  ],
  parameters: ["\n      margin-bottom: 24px;\n    "],
  parametersHeader: [
    "\n      color: #32363a;\n  \n      > h4 {\n        margin: 0 0 16px 0;\n      }\n    "
  ],
  parameter: [
    "\n      margin-bottom: 24px;\n      padding-left: 18px;\n      position: relative;\n  \n      &:before {\n        content: '';\n        position: absolute;\n        border: 3px solid #0071d4;\n        border-radius: 100%;\n        left: 0;\n        top: 6px;\n      }\n  \n      &:last-child {\n        margin-bottom: 0;\n      }\n  \n      > div {\n        padding-left: 0;\n  \n        > table {\n          margin-top: 20px;\n        }\n  \n        &:before {\n          border: none;\n          border-radius: 0;\n          left: 0;\n          top: 0;\n        }\n      }\n    "
  ],
  parameterHeader: [
    "\n      > h4 {\n        margin: 0 0 12px 0;\n      }\n    "
  ],
  messages: [
    "\n      margin-top: 24px;\n      background: #fff;\n      border-radius: 5px;\n      padding: 16px;\n    "
  ],
  messagesHeader: [
    "\n      > h2 {\n        margin: 0 0 24px 0;\n      }\n    "
  ],
  message: [
    "\n      margin-bottom: 24px;\n      padding-left: 18px;\n      position: relative;\n  \n      &:before {\n        content: '';\n        position: absolute;\n        border: 3px solid #0071d4;\n        border-radius: 100%;\n        left: 0;\n        top: 6px;\n      }\n  \n      &:last-child {\n        margin-bottom: 0;\n      }\n  \n      > div > div {\n        padding-left: 0;\n  \n        &:before {\n          border: none;\n          border-radius: 0;\n          left: 0;\n          top: 0;\n        }\n      }\n    "
  ],
  messageIndented: ["\n    "],
  messageHeader: [
    "\n      > h3 {\n        color: #0b74de;\n        font-size: 15px;\n      }\n    "
  ],
  messageHeaders: ["\n      margin: 20px 0;\n    "],
  messageHeadersHeader: [
    "\n      color: #32363a;\n  \n      > h4 {\n        margin: 0 0 8px 0;\n      }\n    "
  ],
  messagePayload: ["\n      margin: 20px 0;\n    "],
  messagePayloadHeader: [
    "\n      color: #32363a;\n  \n      > h4 {\n        margin: 0 0 8px 0;\n      }\n    "
  ],
  messageTags: ["\n      margin: 20px 0;\n    "],
  messageTagsHeader: [
    "\n      color: #32363a;\n  \n      > h4 {\n        margin: 0 0 8px 0;\n      }\n    "
  ],
  schemas: [
    "\n      margin-top: 24px;\n      background: #fff;\n      border-radius: 5px;\n      padding: 16px;\n    "
  ],
  schemasHeader: ["\n      > h2 {\n        margin: 0 0 24px 0;\n      }\n    "],
  schema: [
    "\n      margin-bottom: 24px;\n      padding-left: 18px;\n      position: relative;\n  \n      &:before {\n        content: '';\n        position: absolute;\n        border: 3px solid #0071d4;\n        border-radius: 100%;\n        left: 0;\n        top: 6px;\n      }\n  \n      &:last-child {\n        margin-bottom: 0;\n      }\n    "
  ],
  schemaHeader: [
    "\n      > h4 {\n        color: #0b74de;\n        font-size: 15px;\n        margin: 0 0 8px 0;\n      }\n    "
  ],
  schemaExample: ["\n    "],
  security: [
    "\n      margin-top: 24px;\n      background: #fff;\n      border-radius: 5px;\n      padding: 16px;\n  \n      > table {\n        margin: 0;\n      }\n    "
  ],
  securityHeader: ["\n      > h2 {\n        margin: 0 0 24px 0;\n      }\n    "]
};
