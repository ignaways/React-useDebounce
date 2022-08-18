# React-useDebounce
tutorial on useDebounce hook used for live search purpose to limit the number of request to the API 🐱‍🏍

&nbsp;
## useDebounce.js
+ **Folder** _.... / src / hooks / useDebounce.js_
  
  ``` jsx
  import { useState, useEffect } from 'react';

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      }
    }, [value, delay]);

    return debouncedValue;
  }
  ```
  &nbsp;

## Usage
- **`npm install`**
- **`npm run start`**