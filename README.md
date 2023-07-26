# Master UI Components
This library contains React UI components and util functions and written in Typescript.
 
## 📦 Install

```bash
  yarn add master-ui-components
```
or 

```bash
  npm i master-ui-components
```

## 🔨 Usage

```jsx
import React from 'react';
import { Button, getDateFormats } from 'master-ui-components';

const nowDateFormats = getDateFormats({ timestamp: new Date().getTime(), lang: "en" })
 
const App = () => (
  <>
    <Button text="Press Me"/>
    <div> 
      {"Date: " + nowDateFormats.dateFormat01}
    </div>
  </>
);
```