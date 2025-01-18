//generateStructure.ts
// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const structure = {
  app: {
    'layout.tsx': '',
    'page.tsx': '',
    'ReduxProvider.tsx': '',
    styles: {
      '_breakpoints.scss': '',
      '_mixins.scss': '',
    },
    quotes: {
      'page.tsx': ''
    },
    components: {
      atoms: {
        Button: {
          'Button.tsx': '',
          'Button.module.scss': '',
        },
        Input: {
          'Input.tsx': '',
          'Input.module.scss': '',
        },
        Label: {
          'Label.tsx': '',
          'Label.module.scss': '',
        },
        Quotes: {
          'QuoteItem.tsx': '',
          'QuoteItem.module.scss': '',
        },
      },
      molecules: {
        SearchBar: {
          'SearchBar.tsx': '',
          'SearchBar.module.scss': '',
        },
        BookForm: {
          'BookForm.tsx': '',
          'BookForm.module.scss': '',
        },
      },
      organisms: {
        Header: {
          'Header.tsx': '',
          'Header.module.scss': '',
        },
        Footer: {
          'Footer.tsx': '',
          'Footer.module.scss': '',
        },
        BookList: {
          'BookList.tsx': '',
          'BookList.module.scss': '',
        },
        Quotes: {
          'QuotesList.tsx': '',
          'QuotesList.module.scss': '',
        },
      },
      templates: {
        MainTemplate: {
          'MainTemplate.tsx': '',
          'MainTemplate.module.scss': '',
        },
        QuotesTemplate: {
          'QuotesPage.tsx': '',
          'QuotesPage.module.scss': '',
        },
      },
      pages: {
        Home: {
          'Home.tsx': '',
          'Home.module.scss': '',
        },
        AddBook: {
          'AddBook.tsx': '',
          'AddBook.module.scss': '',
        },
        EditBook: {
          'EditBook.tsx': '',
          'EditBook.module.scss': '',
        },
      },
    },
    },
    
  store: {
    slices: {
      'booksSlice.ts': '',
      'quotesApiSlice.ts': '',
    },
    'storage.ts': '',
    'store.ts': '',
    'types.ts': '',
  },
};

function createStructure(basePath, obj) {
  for (const [key, value] of Object.entries(obj)) {
    const fullPath = path.join(basePath, key);
    if (typeof value === 'object') {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath);
      }
      createStructure(fullPath, value);
    } else {
      if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, value, 'utf8');
      }
    }
  }
}

createStructure('./', structure);
console.log('Folder structure created successfully!');
