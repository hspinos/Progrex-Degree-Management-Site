class DocumentModel {
    constructor() {
        this.initialize();
    }

    initialize() {
      let fillerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec feugiat lorem, sed efficitur nulla. Donec elementum augue ac ex suscipit fermentum.';
        this.documentList = 
        [
            {
                name:"Document 1",
                desc:fillerText,
                isSigned:false,
                id:1,
              },{
                name:"Document 2",
                desc:fillerText,
                isSigned:true,
                id:2,
              },{
                name:"Document 3",
                desc:fillerText,
                isSigned:true,
                id:3,
              },{
                name:"Document 4",
                desc:fillerText,
                isSigned:false,
                id:4,
              },{
                name:"Document 5",
                desc:fillerText,
                isSigned:true,
                id:5,
              },{
                name:"Document 6",
                desc:fillerText,
                isSigned:true,
                id:6,
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
}

module.exports = DocumentModel;