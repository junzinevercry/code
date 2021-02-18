

import React from 'react';
import { Button } from 'antd';
import './App.less';

function App() {

  return (
    <div className="App">
     <h3 className="h3">hello world</h3>
     <Button type="primary">按钮</Button>
     <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
      <Button type="primary" loading>loading</Button>
    </div>
  );
}

export default App;

