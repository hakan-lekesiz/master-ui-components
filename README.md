# Master UI Components
This library contains React UI components and util functions. It has written in Typescript.
 
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

## Authors

[![](https://drive.google.com/file/d/1v-wfeSd1cDavB8UpnNWvRBzvyc5gimO2/view?usp=drive_link?avatarHeight=36)](https://www.linkedin.com/in/hakan-lekesiz)