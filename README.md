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

[![](https://media.licdn.com/dms/image/D4D03AQEybAN4LOM61g/profile-displayphoto-shrink_200_200/0/1670953539936?e=1695859200&v=beta&t=wpy3xdNWP2gaQepBbK2gQPUZmS_Gw5ZV6Rtfh2nkpW8?avatarHeight=36)](https://www.linkedin.com/in/hakan-lekesiz)