class DocumentModel {
  constructor() {
    this.initialize();
  }

  initialize() {
    let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';
    this.documentList =
      [
        {
          id: 1,
          name: "Document 0",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=a438791b-188d-4644-921f-ffb1e3c27a76&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }, {
          id: 2,
          name: "Document 2",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=d817cc62-ebcb-4f9b-8fe9-1357b6f41438&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }, {
          id: 3,
          name: "Document 3",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=1f4b3887-8d1d-45c9-97a5-e9c0889f47cc&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }, {
          id: 4,
          name: "Document 4",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=94da1d20-0e4e-4574-bd37-48f467ba6b34&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }, {
          id: 5,
          name: "Document 5",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=83ec3a52-62d1-4e5e-8b03-c3fea2bfbc4a&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }, {
          id: 6,
          name: "Document 6",
          desc: fillerText,
          isSigned: false,
          powerFormUrl: "https://demo.docusign.net/Member/PowerFormSigning.aspx?PowerFormId=c148659b-602f-410a-8ee7-6f1f6ad2cfce&env=demo&acct=34cdbed2-d10f-48e3-9c43-2f2058f7b861&v=2"
        }
      ]
  }

  getAllDocuments() {
    return this.documentList;
  }

  getDocumentById(id) {
    return this.documentList.find(id => {
      return id == id;
    })
  }

  setDocumentSigned(id) {
    this.documentList.find(document => document.id === id).isSigned = true;
  }
}

module.exports = DocumentModel;